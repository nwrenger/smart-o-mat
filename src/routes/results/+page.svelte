<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { type UserPosition } from '$lib';
	import { progress, progressDefault } from '$lib/store';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { ArrowLeft, ChartBar, GitCompareArrows, ListTodo, RotateCcw } from 'lucide-svelte';
	import ResultsView from './ResultsView.svelte';
	import ComparisonView from './ComparisonView.svelte';
	import PollsView from './PollsView.svelte';
	import { onMount } from 'svelte';
	import CopyProgression from '$lib/components/CopyProgression.svelte';
	import ShareConflict from '$lib/components/ShareConflict.svelte';

	// save progress
	$progress.url = page.url.pathname;

	let opened_tab = $state('results');
	let share: ShareConflict;

	onMount(() => {
		// Get data from attribute
		let data = page.url.searchParams.get('d');
		if (data) {
			let progress_data: (undefined | UserPosition)[] = JSON.parse(atob(data));
			share?.openWarning(progress_data);
		}
	});
</script>

<svelte:head>
	<title>Ergebnisse - Smart-O-Mat</title>
	<meta
		name="description"
		content="Die Ergebnisse mit Vergleich zwischen den Parteien und Einordnung durch Umfragen des Smart-O-Maten."
	/>
</svelte:head>

<ShareConflict bind:this={share} />

<Tabs
	value={opened_tab}
	onValueChange={(e) => (opened_tab = e.value)}
	fluid
	composite
	listClasses="preset-tonal pt-2 px-2 rounded-md"
>
	{#snippet list()}
		<Tabs.Control value="results" labelBase="btn hover:filter-none!">
			{#snippet lead()}<ListTodo size={20} />{/snippet}
			<div class="w-8 sm:w-full"><div class="truncate">Ergebnis</div></div>
		</Tabs.Control>
		<Tabs.Control value="comparison" labelBase="btn hover:filter-none!">
			{#snippet lead()}<GitCompareArrows size={20} />{/snippet}
			<div class="w-8 sm:w-full"><div class="truncate">Vergleichen</div></div>
		</Tabs.Control>
		<Tabs.Control value="polls" labelBase="btn hover:filter-none!">
			{#snippet lead()}<ChartBar size={20} />{/snippet}
			<div class="w-8 sm:w-full"><div class="truncate">Umfragen</div></div>
		</Tabs.Control>
	{/snippet}
	{#snippet content()}
		<Tabs.Panel value="results">
			<ResultsView />
		</Tabs.Panel>
		<Tabs.Panel value="comparison">
			<ComparisonView />
		</Tabs.Panel>
		<Tabs.Panel value="polls">
			<PollsView />
		</Tabs.Panel>
	{/snippet}
</Tabs>

<div class="flex w-full items-center justify-between">
	<div class="flex items-center space-x-2">
		<a class="btn preset-tonal" href="/weighting" title="Zurück">
			<ArrowLeft size={18} />
			<span class="hidden md:block">Zurück</span>
		</a>
		<button
			type="button"
			class="btn preset-filled-primary-500"
			title="Neustarten"
			onclick={() => {
				progress.set(progressDefault());
				goto('/answering');
			}}
		>
			<RotateCcw size={18} />
			<span class="hidden md:block">Neustarten</span>
		</button>
	</div>
	<CopyProgression />
</div>
