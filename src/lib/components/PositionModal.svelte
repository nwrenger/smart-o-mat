<script lang="ts">
	import type { PartyPosition } from '$lib';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import PositionIndicator from './PositionIndicator.svelte';
	import { flyin, opacity } from '$lib/animations';
	import { X } from 'lucide-svelte';

	interface Props {
		party_position: PartyPosition | undefined;
		party_abbreviation: string;
	}

	let { party_position, party_abbreviation }: Props = $props();
</script>

<Dialog>
	<Dialog.Trigger class="relative" title="Begründung">
		<span class="badge-icon preset-filled-surface-500 absolute -right-2 bottom-5 z-10 p-1">?</span>
		<PositionIndicator state={party_position?.state} />
	</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="bg-surface-50-950/50 fixed inset-0 z-50 backdrop-blur-sm {opacity}" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
			<Dialog.Content
				class="card bg-surface-100-900 max-w-screen-sm space-y-4 p-4 shadow-xl {flyin}"
			>
				<header class="flex items-center justify-between">
					<Dialog.Title class="text-2xl font-bold">
						Begründung von "{party_abbreviation}"
					</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:text-surface-950-50 hover:preset-tonal">
						<X class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					<p>
						{#if party_position?.reason}
							{@html party_position.reason}
						{:else}
							Keine Begründung abgegeben!
						{/if}
					</p>
				</Dialog.Description>
				<footer class="flex justify-end">
					<Dialog.CloseTrigger class="btn text-surface-950-50 preset-tonal">
						Schließen
					</Dialog.CloseTrigger>
				</footer>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
