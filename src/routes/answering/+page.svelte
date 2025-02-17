<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { State, stateColor } from '$lib';
	import { theses } from '$lib/consts';
	import { progress } from '$lib/store';
	import { Check, Dot, X } from 'lucide-svelte';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	// save progress
	$progress.url = page.url.pathname;

	// check consts
	const isFirstThesis = $derived($progress.current_thesis === 0);
	const isLastThesis = $derived($progress.current_thesis === theses.length - 1);

	$effect(() => gotoThesisButton($progress.current_thesis));

	/** Determine if on the current thesis. */
	function isCurrentThesis(index: number) {
		return $progress.current_thesis === index;
	}

	/** Jump to a particular thesis. */
	function setThesis(index: number) {
		$progress.current_thesis = index;
	}

	/** Jump to a particular thesis. */
	function gotoThesisButton(index: number) {
		let el = document.getElementById(`thesis-button-${index}`);
		el?.scrollIntoView({ inline: 'center', behavior: 'smooth' });
	}

	function setUserPosition(i: number, position: State) {
		if ($progress.user_positions[i]?.state == position) {
			$progress.user_positions[i] = undefined;
		} else {
			$progress.user_positions[i] = { state: position, double_weighted: false };
			nextThesis();
		}
	}

	/** Get the selected border. */
	function selectedBorder(b: boolean): string {
		if (b) {
			return 'outline outline-2 outline-primary-500 outline-offset-2';
		} else {
			return '';
		}
	}

	/** Progress to the previous thesis. */
	function prevThesis() {
		if (isFirstThesis) {
			goto('/');
		} else {
			setThesis($progress.current_thesis - 1);
		}
	}

	/** Progress to the next thesis. */
	function nextThesis() {
		if (isLastThesis) {
			goto('/weighting');
		} else {
			setThesis($progress.current_thesis + 1);
		}
	}
</script>

<svelte:head>
	<title>Thesen Zustimmung - Smart-O-Mat</title>
	<meta name="description" content="Das auswählen der Zustimmung des Nutzers zu den Thesen." />
</svelte:head>

<div class="relative">
	<div class="flex items-center justify-between gap-4 overflow-x-scroll p-2">
		{#each theses as thesis, i (thesis)}
			<button
				class="btn-icon btn-icon-sm rounded-full {selectedBorder(isCurrentThesis(i))} {stateColor(
					$progress.user_positions[i]?.state
				)}"
				onclick={() => setThesis(i)}
				id="thesis-button-{i}"
				title={thesis.label}
			>
				<span class="font-bold">{i + 1}</span>
			</button>
		{/each}
	</div>
	<hr class="hr absolute left-0 right-0 top-[50%] z-[-1] !border-surface-300-700" />
</div>

{#each theses as thesis, i (thesis)}
	{#if isCurrentThesis(i)}
		<div class="card flex min-h-[260px] flex-col justify-between p-6 preset-tonal sm:min-h-60">
			<div class="space-y-1">
				<p class="text-base text-opacity-80">{i + 1}/{theses.length} {@html thesis.label}</p>
				<h4 class="h5 sm:h4">{@html thesis.description}</h4>
			</div>
			<div class="flex items-center justify-center space-x-4 pt-1 sm:space-x-10">
				<button
					type="button"
					class="btn-icon preset-filled-success-500 {selectedBorder(
						$progress.user_positions[i]?.state == State.Approve
					)}"
					title="stimme zu"
					onclick={() => setUserPosition(i, State.Approve)}
				>
					<Check />
				</button>
				<button
					type="button"
					class="btn-icon preset-filled {selectedBorder(
						$progress.user_positions[i]?.state == State.Neutral
					)}"
					title="neutral"
					onclick={() => setUserPosition(i, State.Neutral)}
				>
					<Dot />
				</button>
				<button
					type="button"
					class="btn-icon preset-filled-error-500 {selectedBorder(
						$progress.user_positions[i]?.state == State.Disprove
					)}"
					title="stimme nicht zu"
					onclick={() => setUserPosition(i, State.Disprove)}
				>
					<X />
				</button>
			</div>
		</div>
	{/if}
{/each}

<nav class="flex items-center justify-between gap-4">
	<button
		type="button"
		class="btn preset-tonal hover:preset-filled"
		onclick={prevThesis}
		title="Zurück"
	>
		<ArrowLeft size={18} />
		<span class="hidden md:block">Zurück</span>
	</button>

	<button
		type="button"
		class="btn preset-tonal hover:preset-filled"
		onclick={nextThesis}
		title={$progress.user_positions[$progress.current_thesis] ? 'Weiter' : 'Überspringen'}
	>
		<span class="hidden md:block"
			>{$progress.user_positions[$progress.current_thesis] ? 'Weiter' : 'Überspringen'}</span
		>
		<ArrowRight size={18} />
	</button>
</nav>
