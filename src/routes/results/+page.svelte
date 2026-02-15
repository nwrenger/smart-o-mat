<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { type UserPosition } from '$lib';
	import { progress, progressDefault } from '$lib/state';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { ArrowLeft, ChartBar, GitCompareArrows, ListTodo, RotateCcw } from 'lucide-svelte';
	import ResultsView from './ResultsView.svelte';
	import ComparisonView from './ComparisonView.svelte';
	import PollsView from './PollsView.svelte';
	import { onMount } from 'svelte';
	import CopyProgression from '$lib/components/CopyProgression.svelte';
	import ShareConflict from '$lib/components/ShareConflict.svelte';

	// save progress
	progress.current.url = page.url.pathname;

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
	<!-- Open Graph -->
	<meta property="og:title" content="Ergebnisse - Smart-O-Mat" />
	<meta
		property="og:description"
		content="Die Ergebnisse mit Vergleich zwischen den Parteien und Einordnung durch Umfragen des Smart-O-Maten."
	/>
</svelte:head>

<ShareConflict bind:this={share} />

<Tabs class="h-full" defaultValue="results">
	<Tabs.List class="preset-tonal rounded-md px-2 pt-2 whitespace-nowrap backdrop-blur-lg">
		<Tabs.Trigger
			class="text-surface-950-50 flex-1 bg-transparent brightness-100 hover:opacity-75"
			value="results"
		>
			<ListTodo size={20} />
			<div class="w-8 sm:w-fit"><div class="truncate">Ergebnis</div></div>
		</Tabs.Trigger>
		<Tabs.Trigger
			class="text-surface-950-50 flex-1 bg-transparent brightness-100 hover:opacity-75"
			value="comparison"
		>
			<GitCompareArrows size={20} />
			<div class="w-8 sm:w-fit"><div class="truncate">Vergleichen</div></div>
		</Tabs.Trigger>
		<Tabs.Trigger
			class="text-surface-950-50 flex-1 bg-transparent brightness-100 hover:opacity-75"
			value="polls"
		>
			<ChartBar size={20} />
			<div class="w-8 sm:w-fit"><div class="truncate">Umfragen</div></div>
		</Tabs.Trigger>
		<Tabs.Indicator />
	</Tabs.List>
	<Tabs.Content class="h-full" value="results">
		<ResultsView />
	</Tabs.Content>
	<Tabs.Content class="h-full" value="comparison">
		<ComparisonView />
	</Tabs.Content>
	<Tabs.Content class="h-full" value="polls">
		<PollsView />
	</Tabs.Content>
</Tabs>

<div class="flex w-full items-center justify-between">
	<div class="flex items-center space-x-2">
		<a class="btn text-surface-950-50 preset-tonal" href="/weighting" title="Zurück">
			<ArrowLeft size={18} />
			<span class="hidden md:block">Zurück</span>
		</a>
		<button
			type="button"
			class="btn text-surface-950-50 preset-filled-primary-500"
			title="Neustarten"
			onclick={() => {
				progress.current = progressDefault();
				goto('/answering');
			}}
		>
			<RotateCcw size={18} />
			<span class="hidden md:block">Neustarten</span>
		</button>
	</div>
	<CopyProgression />
</div>
