<script lang="ts">
	import { removeQuery, type UserPosition } from '$lib';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import CopyProgression from './CopyProgression.svelte';
	import { progress } from '$lib/store';

	let open = $state(false);
	let user_positions: (undefined | UserPosition)[];

	export function openWarning(d: (undefined | UserPosition)[]) {
		open = true;
		user_positions = d;
	}

	function overwrite() {
		$progress.user_positions = user_positions;
		close();
	}

	function close() {
		removeQuery('d');
		open = false;
	}
</script>

<Modal
	{open}
	onOpenChange={(e) => {
		if (!e.open) close();
	}}
	triggerBase="hidden"
	contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
	backdropClasses="backdrop-blur-sm"
>
	{#snippet content()}
		<header class="flex justify-between">
			<h2 class="h3">Geteilte Daten</h2>
		</header>
		<article>
			<p class="opacity-80">
				Es wurden gespeicherte Daten gefunden. Sie können ihren aktuellen Stand kopieren und dann an
				einem anderen Ort zwischenspeichern. Soll dieser Stand nun Überschrieben werden?
			</p>
		</article>
		<footer class="flex justify-end gap-4">
			<button type="button" class="btn preset-tonal" onclick={close}>Abbrechen</button>
			<CopyProgression copyText="Speichern" />
			<button type="button" class="btn preset-filled" onclick={overwrite}>Überschreiben</button>
		</footer>
	{/snippet}
</Modal>
