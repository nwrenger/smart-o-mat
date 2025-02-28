<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { type Progress } from '$lib';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import { progress, progressDefault } from '$lib/store';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import {
		ArrowLeft,
		ChartBar,
		ClipboardCheck,
		ClipboardCopy,
		GitCompareArrows,
		ListTodo,
		RotateCcw
	} from 'lucide-svelte';
	import ResultsView from './ResultsView.svelte';
	import ComparisonView from './ComparisonView.svelte';
	import PollsView from './PollsView.svelte';
	import { onMount } from 'svelte';

	// save progress
	$progress.url = page.url.pathname;

	let stringified_progress = $derived(btoa(JSON.stringify($progress)));
	let tab_index = $state('results');

	onMount(() => {
		// Get data from attribute
		let data = page.url.searchParams.get('data');
		if (data) {
			let progress_data: Progress = JSON.parse(atob(data));
			$progress = progress_data;
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

<Tabs
	value={tab_index}
	onValueChange={(e) => (tab_index = e.value)}
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
		<a class="btn preset-tonal hover:preset-filled" href="/weighting" title="Zurück">
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
	<CopyButton
		text="{page.url.href}?data={stringified_progress}"
		class="btn preset-tonal hover:preset-filled"
		title="Teilen"
	>
		{#snippet child({ copied })}
			{#if copied}
				<span class="hidden md:block">Kopiert</span>
				<ClipboardCheck size={18} />
			{:else}
				<span class="hidden md:block">Teilen</span>
				<ClipboardCopy size={18} />
			{/if}
		{/snippet}
	</CopyButton>
</div>
