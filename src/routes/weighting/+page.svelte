<script lang="ts">
	import { page } from '$app/state';
	import PositionIndicator from '$lib/components/PositionIndicator.svelte';
	import { theses } from '$lib/consts';
	import { progress } from '$lib/state';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';

	// save progress
	progress.current.url = page.url.pathname;
</script>

<svelte:head>
	<title>Gewichtung - Smart-O-Mat</title>
	<meta
		name="description"
		content="Die Gewichtung der Thesen - Welche Thesen sind Ihnen besonders wichtig?"
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Gewichtung - Smart-O-Mat" />
	<meta
		property="og:description"
		content="Die Gewichtung der Thesen - Welche Thesen sind Ihnen besonders wichtig?"
	/>
</svelte:head>

<h4 class="h4">Gewichtung der Thesen</h4>

<p>
	Welche Thesen sind Ihnen besonders wichtig? Markieren Sie die Thesen, um diese mit doppelter
	Gewichtung in die Berechnung einfließen zu lassen.
</p>

<div class="space-y-3">
	{#if !!progress.current.user_positions.find((p) => !!p)}
		{#each theses as thesis, i}
			{#if progress.current.user_positions[i]}
				{@const state = progress.current.user_positions[i]?.state}
				<div
					class="card text-surface-950-50 preset-tonal flex items-center justify-between space-x-2 p-6"
				>
					<div class="flex space-y-2 space-x-4">
						<Switch
							checked={progress.current.user_positions[i].double_weighted}
							onCheckedChange={(e) => {
								if (progress.current.user_positions[i])
									progress.current.user_positions[i].double_weighted = e.checked;
							}}
						>
							<Switch.Control>
								<Switch.Thumb>
									<Switch.Context>
										{#snippet children(switch_)}
											{#if switch_().checked}
												<span class="text-xs">2x</span>
											{:else}
												<span class="text-xs">1x</span>
											{/if}
										{/snippet}
									</Switch.Context>
								</Switch.Thumb>
							</Switch.Control>
							<Switch.HiddenInput />
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
	<a class="btn text-surface-950-50 preset-tonal" href="/answering" title="Zurück">
		<ArrowLeft size={18} />
		<span class="hidden md:block">Zurück</span>
	</a>
	<a class="btn text-surface-950-50 preset-tonal" href="/results" title="Weiter">
		<span class="hidden md:block">Weiter</span>
		<ArrowRight size={18} />
	</a>
</div>
