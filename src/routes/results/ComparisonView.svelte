<script lang="ts">
	import DescriptionTooltip from '$lib/components/DescriptionTooltip.svelte';
	import PositionIndicator from '$lib/components/PositionIndicator.svelte';
	import PositionModal from '$lib/components/PositionModal.svelte';
	import { parties, theses } from '$lib/consts';
	import { progress } from '$lib/state';

	let selectedPartiesAbbreviations = $state(['SPD', 'CDU / CSU']);

	let selectedParties = $derived([
		parties.find((p) => p.abbreviation === selectedPartiesAbbreviations[0]),
		parties.find((p) => p.abbreviation === selectedPartiesAbbreviations[1])
	]);
</script>

<div class="space-y-3">
	<div class="card text-surface-950-50 preset-tonal overflow-x-auto p-6">
		<div class="grid items-center gap-2 md:grid-cols-2">
			{#each ['Partei 1', 'Partei 2'] as party, i (party)}
				<label class="label">
					<span class="label-text text-base">{party}</span>
					<select class="select" bind:value={selectedPartiesAbbreviations[i]}>
						{#each parties as party}
							<option value={party.abbreviation}>{party.abbreviation}</option>
						{/each}
					</select>
				</label>
			{/each}
		</div>
	</div>

	<div class="card text-surface-950-50 preset-tonal hidden overflow-x-auto p-6 md:block">
		<div class="grid grid-cols-4 gap-2">
			<p class="text-center font-bold">These</p>
			<p class="text-center font-bold">Ihre Position</p>
			{#each ['Partei 1', 'Partei 2'] as party, i (party)}
				<p class="text-center font-bold">{party} ({selectedPartiesAbbreviations[i]})</p>
			{/each}
		</div>
	</div>

	{#each theses as thesis, i}
		<div
			class="card text-surface-950-50 preset-tonal grid grid-cols-1 gap-2 overflow-x-auto p-6 md:grid-cols-4"
		>
			<div class="flex items-center justify-between space-x-2">
				<p class="flex items-center font-bold md:font-normal">
					{i + 1}. {@html thesis.label}
				</p>
				<DescriptionTooltip {thesis} />
			</div>

			<div class="flex items-center justify-between md:justify-center">
				<p class="md:hidden">Ihre Position</p>
				<PositionIndicator state={progress.current.user_positions[i]?.state} />
			</div>

			{#each ['Partei 1', 'Partei 2'] as party, i2 (party)}
				<div class="flex items-center justify-between md:justify-center">
					<p class="md:hidden">{party} ({selectedPartiesAbbreviations[i2]})</p>
					<PositionModal
						party_abbreviation={selectedPartiesAbbreviations[i2]}
						party_position={selectedParties[i2]?.positions[i]}
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>
