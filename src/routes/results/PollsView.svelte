<script lang="ts">
	import { evaluate_user_vote, type EvaluatedParty } from '$lib';
	import { parties } from '$lib/consts';
	import { progress } from '$lib/store';

	import { Polls, Query, DataType, Order } from 'german-election-polls';
	import { Progress, ProgressRing } from '@skeletonlabs/skeleton-svelte';
	import { TriangleAlert } from 'lucide-svelte';
	import WarningTooltip from '$lib/components/WarningTooltip.svelte';

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
					let oldCount = pollData[abbr]?.count ?? 0;
					let newCount = oldCount + 1;

					let oldAverage = pollData[abbr]?.percentage ?? 0;
					let newAverage = (oldAverage * oldCount + result.result) / newCount;

					pollData[abbr] = {
						percentage: newAverage,
						count: newCount
					};
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

	function emptyPolls(pollData: PollData): boolean {
		return Object.values(pollData).length == 0;
	}

	/**
	 * Returns all unique combinations of length k from the given array.
	 * E.g., combinations(['A','B','C'], 2) => [['A','B'], ['A','C'], ['B','C']]
	 */
	function combinations<T>(arr: T[], k: number): T[][] {
		if (k > arr.length || k <= 0) return [];
		if (k === arr.length) return [arr];
		if (k === 1) return arr.map((val) => [val]);

		const result: T[][] = [];

		function backtrack(start: number, combo: T[]) {
			// If we've chosen k items, store the result and return
			if (combo.length === k) {
				result.push([...combo]);
				return;
			}
			// Otherwise, keep building
			for (let i = start; i < arr.length; i++) {
				combo.push(arr[i]);
				backtrack(i + 1, combo);
				combo.pop();
			}
		}

		backtrack(0, []);
		return result;
	}

	function scaledMajorParties(evaluatedParties: EvaluatedParty[], data: PollData, threshold = 5) {
		const major = evaluatedParties
			.map((ep) => ({
				ep,
				originalShare: partyPercentage(data, ep) ?? 0
			}))
			.filter((p) => p.originalShare >= threshold);

		if (major.length === 0) return [];

		const total = major.reduce((acc, p) => acc + p.originalShare, 0);
		return major.map((p) => ({
			ep: p.ep,
			// scale to new sum = 100
			scaledShare: (p.originalShare / total) * 100
		}));
	}

	function possibleCoalitions(
		evaluatedParties: EvaluatedParty[],
		data: PollData,
		threshold = 5,
		minSize = 2,
		maxSize = 3
	) {
		const scaledParties = scaledMajorParties(evaluatedParties, data, threshold);
		if (scaledParties.length === 0) {
			return [];
		}

		let results: { coalition: string[]; sum: number }[] = [];

		// For each coalition size from minSize..maxSize:
		for (let size = minSize; size <= maxSize; size++) {
			// Generate all combos of that size from scaledParties
			const allCombos = combinations(scaledParties, size);

			for (const combo of allCombos) {
				const sum = combo.reduce((acc, x) => acc + x.scaledShare, 0);

				if (sum >= 50) {
					results.push({
						coalition: combo
							.sort((a, b) => b.scaledShare - a.scaledShare)
							.map((c) => c.ep.party.abbreviation),
						sum
					});
				}
			}
		}

		// Sort descending by sum
		results.sort((a, b) => b.sum - a.sum);
		// Sort ascending by size
		results.sort((a, b) => a.coalition.length - b.coalition.length);

		return results;
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
		{#if emptyPolls(pollData)}
			<div class="card preset-tonal space-y-4 p-6">
				<p><strong>Keine aktuellen Umfrageergebnisse gefunden!</strong></p>
			</div>
		{:else}
			{#each evaluate_user_vote($progress, parties) as evaluated_party (evaluated_party)}
				{#if inPolls(pollData, evaluated_party)}
					<div class="card preset-tonal space-y-4 p-6">
						<p><strong>{evaluated_party.party.abbreviation}</strong></p>
						<Progress
							value={evaluated_party.matchPercentage}
							max={100.0}
							labelText="text-base md:text-lg"
						>
							{evaluated_party.matchPercentage.toPrecision(3)}%
						</Progress>
						<div class="grid grid-cols-[auto_1fr] justify-center gap-2">
							<p class="flex w-full justify-center">In Umfrageergebnissen:</p>
							<div class="flex items-center">
								{#if (partyPercentage(pollData, evaluated_party) || 0) >= 5}
									<p>
										{pollData[evaluated_party.party.abbreviation].percentage.toPrecision(3)}%
									</p>
								{:else}
									<div class="text-error-500 flex items-center space-x-2">
										<!-- <TriangleAlert size={18} /> -->
										<WarningTooltip
											msg="Die Partei erreicht nach aktuellen Umfragen nicht die 5% Hürde!"
										/>
										<p>
											{pollData[evaluated_party.party.abbreviation].percentage.toPrecision(3)}%
										</p>
									</div>
								{/if}
							</div>
						</div>
					</div>
				{/if}
			{/each}

			<div class="card preset-tonal space-y-3 p-6">
				<p><strong>Mögliche Koalitionen</strong></p>
				<ul class="list-inside list-disc space-y-2">
					{#each possibleCoalitions(evaluate_user_vote($progress, parties), pollData) as coalition}
						<li>
							{#each coalition.coalition as party, i}
								<code class="code">{party}</code> {i != coalition.coalition.length - 1 ? ' + ' : ''}
							{/each}
							= {coalition.sum.toFixed(1)}%
						</li>
					{:else}
						<p>Keine Koalitionen mit &gt;= 50% gefunden.</p>
					{/each}
				</ul>
			</div>
		{/if}
	{/await}
</div>
