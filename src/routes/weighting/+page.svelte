<script lang="ts">
	import { page } from '$app/state';
	import PositionIndicator from '$lib/components/PositionIndicator.svelte';
	import { theses } from '$lib/consts';
	import { progress } from '$lib/store';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';

	// save progress
	$progress.url = page.url.pathname;
</script>

<h4 class="h4">Gewichtung der Thesen</h4>

<p>
	Welche Thesen sind Ihnen besonders wichtig? Markieren Sie die Thesen, um diese mit doppelter
	Gewichtung in die Berechnung einfließen zu lassen.
</p>

<div class="space-y-3">
	{#if !!$progress.user_positions.find((p) => !!p)}
		{#each theses as thesis, i}
			{#if $progress.user_positions[i]}
				{@const state = $progress.user_positions[i]?.state}
				<div class="card flex items-center justify-between space-x-2 p-6 preset-tonal">
					<div class="flex space-x-4 space-y-2">
						<Switch
							name="compact"
							controlWidth="!w-10 !h-10"
							controlInactive="preset-filled-surface-300-700"
							controlActive="preset-filled-primary-500"
							compact
							bind:checked={$progress.user_positions[i].double_weighted}
						>
							{#snippet inactiveChild()}1x{/snippet}
							{#snippet activeChild()}2x{/snippet}
						</Switch>
						<div class="flex w-full items-center justify-between">
							<div>
								<p><strong>{i + 1}. {@html thesis.label}</strong></p>
								<p>{@html thesis.description}</p>
							</div>
						</div>
					</div>
					<PositionIndicator {state} />
				</div>
			{/if}
		{/each}
	{:else}
		<p class=" text-primary-500">Keine Thesen beantwortet!</p>
	{/if}
</div>

<div class="flex w-full items-center justify-between">
	<a class="btn preset-tonal hover:preset-filled" href="/answering" title="Zurück">
		<ArrowLeft size={18} />
		<span class="hidden md:block">Zurück</span>
	</a>
	<a class="btn preset-tonal hover:preset-filled" href="/results" title="Weiter">
		<span class="hidden md:block">Weiter</span>
		<ArrowRight size={18} />
	</a>
</div>
