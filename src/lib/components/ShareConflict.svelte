<script lang="ts">
	import { removeQuery, type UserPosition } from '$lib';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import CopyProgression from './CopyProgression.svelte';
	import { progress } from '$lib/state';
	import { X } from 'lucide-svelte';
	import { flyin, opacity } from '$lib/animations';

	let open = $state(false);
	let user_positions: (undefined | UserPosition)[];

	export function openWarning(d: (undefined | UserPosition)[]) {
		open = true;
		user_positions = d;
	}

	function overwrite() {
		progress.current.user_positions = user_positions;
		close();
	}

	function close() {
		removeQuery('d');
		open = false;
	}
</script>

<Dialog
	{open}
	onOpenChange={(e) => {
		if (!e.open) close();
	}}
>
	<Portal>
		<Dialog.Backdrop class="bg-surface-50-950/50 fixed inset-0 z-50 backdrop-blur-sm {opacity}" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
			<Dialog.Content
				class="card bg-surface-100-900 max-w-screen-sm space-y-4 p-4 shadow-xl {flyin}"
			>
				<header class="flex items-center justify-between">
					<Dialog.Title class="text-2xl font-bold">Geteilte Daten</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:text-surface-950-50 hover:preset-tonal">
						<X class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					<p>
						Es wurden gespeicherte Daten gefunden. Sie können ihren aktuellen Stand kopieren und
						dann an einem anderen Ort zwischenspeichern. Soll dieser Stand nun Überschrieben werden?
					</p>
				</Dialog.Description>
				<footer class="flex justify-end gap-2">
					<Dialog.CloseTrigger class="btn text-surface-950-50 preset-tonal"
						>Abbrechen</Dialog.CloseTrigger
					>
					<CopyProgression copyText="Speichern" />
					<button type="button" class="btn preset-filled" onclick={overwrite}>Überschreiben</button>
				</footer>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
