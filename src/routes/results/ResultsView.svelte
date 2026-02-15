<script lang="ts">
	import { evaluate_user_vote } from '$lib';
	import ImageLoader from '$lib/components/ImageLoader.svelte';
	import { parties } from '$lib/consts';
	import { progress } from '$lib/state';
	import { Accordion, Progress } from '@skeletonlabs/skeleton-svelte';
	import { ChevronDown, ScrollText } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let evaluated_user_votes = evaluate_user_vote(progress.current, parties);
	let opened_accordion = $state([evaluated_user_votes.at(0)?.party.abbreviation || '']);
</script>

<div class="space-y-3">
	{#each evaluated_user_votes as evaluated_party (evaluated_party)}
		<div class="card text-surface-950-50 preset-tonal space-y-3">
			<div class="space-y-4 px-6 pt-6">
				<p><strong>{evaluated_party.party.abbreviation}</strong></p>
				<Progress
					value={evaluated_party.matchPercentage}
					class="grid grid-cols-[auto_1fr] items-center gap-4"
				>
					<Progress.Label class="text-base md:text-lg">
						{evaluated_party.matchPercentage.toPrecision(3)}%
					</Progress.Label>
					<Progress.Track>
						<Progress.Range />
					</Progress.Track>
				</Progress>
			</div>
			<Accordion
				collapsible
				value={opened_accordion}
				onValueChange={(e) => (opened_accordion = e.value)}
			>
				<Accordion.Item value={evaluated_party.party.abbreviation}>
					<h3>
						<Accordion.ItemTrigger
							class="hover:preset-tonal hover:text-surface-950-50 flex items-center justify-between gap-2 rounded-xl px-6 font-bold"
						>
							<span class="flex justify-center space-x-4">
								<ScrollText />
								<span>Beschreibung</span>
							</span>
							<Accordion.ItemIndicator class="group">
								<ChevronDown class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
					</h3>
					<Accordion.ItemContent class="">
						{#snippet element(attributes)}
							{#if !attributes.hidden}
								<div
									{...attributes}
									class="flex flex-col items-end space-y-2 px-6 pb-6 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-2"
									transition:slide={{ duration: 150 }}
								>
									<div class="space-y-2">
										<p><strong>{evaluated_party.party.name}</strong></p>
										<p>{@html evaluated_party.party.description}</p>
									</div>
									<ImageLoader
										ratio="aspect-square border-[20px] border-[white] shadow-md"
										width="w-32 max-w-32"
										rounded=""
										src={evaluated_party.party.logo}
										alt={evaluated_party.party.abbreviation}
									/>
								</div>
							{/if}
						{/snippet}
					</Accordion.ItemContent>
				</Accordion.Item>
			</Accordion>
		</div>
	{/each}
</div>
