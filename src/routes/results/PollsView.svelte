<script lang="ts">
	import { evaluate_user_vote, type EvaluatedParty } from '$lib';
	import { parties } from '$lib/consts';
	import { progress } from '$lib/store';

	import { Polls, Query, DataType, Order } from 'german-election-polls';
	import { Progress, ProgressRing } from '@skeletonlabs/skeleton-svelte';

	interface Poll {
		percentage: number;
		count: number;
	}

	type PollData = Record<string, Poll>;

	async function fetchData(): Promise<PollData> {
		let pollData: PollData = {};

		const d = new Date();
		d.setDate(d.getDate() - 8);

		const polls = new Polls();
		await polls.update();

		const query = polls.select([
			Query.include([DataType.Surveys]),
			Query.Survey.Release.isGreater(d),
			Query.Survey.Parliament.Shortcut.is(['Bundestag']),
			Query.Survey.Sort.byParticipants(Order.Asc),
			Query.Survey.Sort.allResults(Order.Desc)
		]);

		for (const survey of query.surveys) {
			for (const result of survey.results) {
				let abbr = normalizeAbbreviation(result.party.shortcut);
				if (abbr) {
					let count = pollData[abbr]?.count + 1 || 1;
					let countShare = count / (count + 1);
					let prevPercentage = pollData[abbr]?.percentage || 0;
					let percentage = prevPercentage * countShare + result.result / count;
					pollData[abbr] = { percentage, count };
				}
			}
		}

		return pollData;
	}

	function normalizeAbbreviation(poll: string): string | undefined {
		const mapping: Record<string, string> = {
			'CDU/CSU': 'CDU / CSU',
			BSW: 'BSW',
			SPD: 'SPD',
			Linke: 'Die Linke',
			AfD: 'AfD',
			Grüne: 'GRÜNE',
			FDP: 'FDP'
		};

		return mapping[poll] || undefined;
	}

	function inPolls(pollData: PollData, evaluated_party: EvaluatedParty): boolean {
		return !!pollData[evaluated_party.party.abbreviation];
	}

	function partyPercentage(
		pollData: PollData,
		evaluated_party: EvaluatedParty
	): number | undefined {
		return pollData[evaluated_party.party.abbreviation]?.percentage;
	}

	function partiesAboveThreshold(
		evaluatedParties: EvaluatedParty[],
		data: PollData,
		threshold = 5
	) {
		return evaluatedParties.filter((ep) => (partyPercentage(data, ep) ?? 0) >= threshold);
	}

	function possible2PartyCoalitions(evaluatedParties: EvaluatedParty[], data: PollData) {
		const majorParties = partiesAboveThreshold(evaluatedParties, data);

		const results = [];
		for (let i = 0; i < majorParties.length; i++) {
			for (let j = i + 1; j < majorParties.length; j++) {
				const sum =
					(partyPercentage(data, majorParties[i]) ?? 0) +
					(partyPercentage(data, majorParties[j]) ?? 0);
				if (sum >= 50) {
					results.push({
						coalition: [majorParties[i].party.abbreviation, majorParties[j].party.abbreviation],
						sum
					});
				}
			}
		}

		return results.sort((a, b) => b.sum - a.sum);
	}

	function possible3PartyCoalitions(evaluatedParties: EvaluatedParty[], data: PollData) {
		const majorParties = partiesAboveThreshold(evaluatedParties, data);

		const results = [];
		for (let i = 0; i < majorParties.length; i++) {
			for (let j = i + 1; j < majorParties.length; j++) {
				for (let k = j + 1; k < majorParties.length; k++) {
					const sum =
						(partyPercentage(data, majorParties[i]) ?? 0) +
						(partyPercentage(data, majorParties[j]) ?? 0) +
						(partyPercentage(data, majorParties[k]) ?? 0);
					if (sum >= 50) {
						results.push({
							coalition: [
								majorParties[i].party.abbreviation,
								majorParties[j].party.abbreviation,
								majorParties[k].party.abbreviation
							],
							sum
						});
					}
				}
			}
		}

		return results.sort((a, b) => b.sum - a.sum);
	}
</script>

<div class="space-y-3">
	{#await fetchData()}
		<div class="flex items-center justify-center">
			<ProgressRing
				value={null}
				strokeWidth="8px"
				size="size-10"
				meterStroke="stroke-surface-950-50"
				trackStroke="stroke-surface-200-800"
			/>
		</div>
	{:then pollData}
		{#each evaluate_user_vote($progress, parties) as evaluated_party, i (evaluated_party)}
			{#if inPolls(pollData, evaluated_party)}
				<div class="card space-y-2 p-6 preset-tonal">
					<p><strong>{evaluated_party.party.abbreviation}</strong></p>
					<div class="grid grid-cols-[auto_1fr] justify-center gap-2">
						<p class="flex w-full justify-center">Ihre Zustimmung:</p>
						<div class="flex items-center justify-center">
							<Progress value={evaluated_party.matchPercentage} max={100.0} labelText="text-base">
								{evaluated_party.matchPercentage.toPrecision(3)}%
							</Progress>
						</div>
					</div>
					<div class="grid grid-cols-[auto_1fr] justify-center gap-2">
						<p class="flex w-full justify-center">In Umfrageergebnissen:</p>
						<div class="flex items-center justify-center">
							{#if (partyPercentage(pollData, evaluated_party) || 0) >= 5}
								<Progress
									value={pollData[evaluated_party.party.abbreviation].percentage}
									max={100.0}
									labelText="text-base"
								>
									{pollData[evaluated_party.party.abbreviation].percentage.toPrecision(3)}%
								</Progress>
							{:else}
								<Progress
									value={pollData[evaluated_party.party.abbreviation].percentage}
									max={100.0}
									labelText="text-base text-error-500"
									meterBg="bg-error-500"
								>
									{pollData[evaluated_party.party.abbreviation].percentage.toPrecision(3)}% (unter
									5%)
								</Progress>
							{/if}
						</div>
					</div>
				</div>
			{/if}
		{/each}

		<div class="card space-y-3 p-6 preset-tonal">
			<p><strong>Mögliche 2er-Koalitionen</strong></p>
			<div class="space-y-2">
				{#each possible2PartyCoalitions(evaluate_user_vote($progress, parties), pollData) as coalition}
					<div class="flex items-center justify-between">
						<p>{coalition.coalition.join(' + ')}</p>
						<p>{coalition.sum.toFixed(1)}%</p>
					</div>
				{:else}
					<p>Keine einfachen 2er-Koalitionen mit &gt;= 50% gefunden.</p>
				{/each}
			</div>
		</div>

		<div class="card space-y-3 p-6 preset-tonal">
			<p><strong>Mögliche 3er-Koalitionen</strong></p>
			<div class="space-y-2">
				{#each possible3PartyCoalitions(evaluate_user_vote($progress, parties), pollData) as coalition}
					<div class="flex items-center justify-between">
						<p>{coalition.coalition.join(' + ')}</p>
						<p>{coalition.sum.toFixed(1)}%</p>
					</div>
				{:else}
					<p>Keine 3er-Koalitionen mit &gt;= 50% gefunden (weitere Kombinationen wären möglich).</p>
				{/each}
			</div>
		</div>
	{/await}
</div>
