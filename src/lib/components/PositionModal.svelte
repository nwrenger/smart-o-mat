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
	bind:open
	triggerBase=""
	contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl w-screen max-w-screen-sm"
	backdropClasses="backdrop-blur-sm"
>
	{#snippet trigger()}
		<PositionIndicator state={party_position?.state} />
	{/snippet}
	{#snippet content()}
		<header class="flex justify-between">
			<h3 class="h3">Begründung von "{party_abbreviation}"</h3>
		</header>
		<article>
			<p class="opacity-80">
				{#if party_position?.reason}
					{party_position.reason}
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
