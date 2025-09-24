<script lang="ts">
	import type { PartyPosition } from '$lib';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import PositionIndicator from './PositionIndicator.svelte';

	interface Props {
		party_position: PartyPosition | undefined;
		party_abbreviation: string;
	}

	let { party_position, party_abbreviation }: Props = $props();
	let open = $state(false);
</script>

<Modal
	{open}
	onOpenChange={(e) => (open = e.open)}
	triggerBase="relative"
	contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl w-screen max-w-(--breakpoint-sm)"
	backdropClasses="backdrop-blur-xs"
>
	{#snippet trigger()}
		<span class="badge-icon preset-filled-surface-500 absolute -right-2 bottom-5 z-10 p-1">?</span>
		<PositionIndicator state={party_position?.state} />
	{/snippet}
	{#snippet content()}
		<header class="flex justify-between">
			<h3 class="h3">Begründung von "{party_abbreviation}"</h3>
		</header>
		<article>
			<p class="opacity-80">
				{#if party_position?.reason}
					{@html party_position.reason}
				{:else}
					Keine Begründung abgegeben!
				{/if}
			</p>
		</article>
		<footer class="flex justify-end gap-4">
			<button
				title="Schließen"
				type="button"
				class="btn preset-filled"
				onclick={() => {
					open = false;
				}}>Schließen</button
			>
		</footer>
	{/snippet}
</Modal>
