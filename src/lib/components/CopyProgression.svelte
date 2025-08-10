<script lang="ts">
	import { page } from '$app/state';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import { progress } from '$lib/store';
	import { ClipboardCheck, ClipboardCopy } from 'lucide-svelte';

	interface Props {
		copyText?: string;
	}

	let { copyText = 'Teilen' }: Props = $props();

	let stringified_progress = $derived(btoa(JSON.stringify($progress.user_positions)));
</script>

<CopyButton text="{page.url.href}?d={stringified_progress}" class="btn preset-tonal" title="Teilen">
	{#snippet child({ copied })}
		{#if copied}
			<span class="hidden md:block">Kopiert</span>
			<ClipboardCheck size={18} />
		{:else}
			<span class="hidden md:block">{copyText}</span>
			<ClipboardCopy size={18} />
		{/if}
	{/snippet}
</CopyButton>
