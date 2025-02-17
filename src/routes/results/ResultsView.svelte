<script lang="ts">
	import { evaluate_user_vote } from '$lib';
	import ImageLoader from '$lib/components/ImageLoader.svelte';
	import { parties } from '$lib/consts';
	import { progress } from '$lib/store';
	import { Accordion, Progress as P } from '@skeletonlabs/skeleton-svelte';
	import { ScrollText } from 'lucide-svelte';
</script>

<div class="space-y-3">
	{#each evaluate_user_vote($progress, parties) as evaluated_party, i (evaluated_party)}
		<div class="card space-y-3 preset-tonal">
			<div class="space-y-4 px-6 pt-6">
				<p><strong>{evaluated_party.party.abbreviation}</strong></p>
				<P value={evaluated_party.matchPercentage} max={100.0} labelText="text-base"
					>{evaluated_party.matchPercentage.toPrecision(3)}%</P
				>
			</div>
			<Accordion collapsible value={i === 0 ? [evaluated_party.party.abbreviation] : ['']}>
				<Accordion.Item
					value={evaluated_party.party.abbreviation}
					controlRounded="rounded-xl"
					controlHover="hover:preset-tonal"
					controlClasses="px-6"
					panelClasses="px-6 pb-6"
				>
					<!-- Control -->
					{#snippet lead()}<ScrollText size={24} />{/snippet}
					{#snippet control()}Beschreibung{/snippet}
					<!-- Panel -->
					{#snippet panel()}
						<div
							class="flex flex-col items-end space-y-2 md:flex-row md:items-center md:justify-between md:space-x-2 md:space-y-0"
						>
							<div class="space-y-2">
								<p><strong>{evaluated_party.party.name}</strong></p>
								<p>{evaluated_party.party.description}</p>
							</div>
							<ImageLoader
								ratio="aspect-square border-[20px] border-[white] shadow-md"
								width="w-32 max-w-32"
								rounded=""
								src={evaluated_party.party.logo}
								alt={evaluated_party.party.abbreviation}
							/>
						</div>
					{/snippet}
				</Accordion.Item>
			</Accordion>
		</div>
	{/each}
</div>
