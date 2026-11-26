<script lang="ts">
	import { page } from '$app/state';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import { progress } from '$lib/state';
	import { ClipboardCheck, ClipboardCopy, Share2, X } from 'lucide-svelte';
	import { flyin, opacity } from '$lib/animations';

	interface Props {
		copyText?: string;
	}

	let { copyText = 'Teilen' }: Props = $props();

	let stringified_progress = $derived(btoa(JSON.stringify(progress.current.user_positions)));
</script>

<Dialog>
	<Dialog.Trigger class="btn text-surface-950-50 preset-tonal" title="Teilen">
		<span class="hidden md:block">{copyText}</span>
		<Share2 size={18} />
	</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="bg-surface-50-950/50 fixed inset-0 z-50 backdrop-blur-sm {opacity}" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
			<Dialog.Content
				class="card bg-surface-100-900 max-w-screen-sm space-y-4 p-4 shadow-xl {flyin}"
			>
				<header class="flex items-center justify-between">
					<Dialog.Title class="text-2xl font-bold">Ergebnisse teilen</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:text-surface-950-50 hover:preset-tonal">
						<X class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					<p>
						Teile deine Ergebnisse über einen Link mit anderen. Der Link enthält deine Antworten und
						damit sensible Informationen über deine politischen Ansichten. Teile ihn daher nur mit
						Personen, denen du vertraust!
					</p>
				</Dialog.Description>
				<footer class="flex justify-end gap-2">
					<Dialog.CloseTrigger class="btn text-surface-950-50 preset-tonal">
						Schließen
					</Dialog.CloseTrigger>
					<CopyButton
						text="{page.url.href}#{stringified_progress}"
						class="btn  preset-filled"
						title="Teilen"
					>
						{#snippet child({ copied })}
							{#if copied}
								<span>Kopiert</span>
								<ClipboardCheck size={18} />
							{:else}
								<span>Kopieren</span>
								<ClipboardCopy size={18} />
							{/if}
						{/snippet}
					</CopyButton>
				</footer>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
