<script lang="ts">
	import type { Thesis } from '$lib';
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
	import { ScrollText } from 'lucide-svelte';

	interface Props {
		thesis: Thesis;
	}

	let { thesis }: Props = $props();
	let open = $state(false);
</script>

<Tooltip
	{open}
	onOpenChange={(e) => (open = e.open)}
	positioning={{ placement: 'top' }}
	base="flex items-center"
	triggerBase="btn-icon"
	contentBase="card preset-filled text-center p-4 max-w-[calc(100vw-30px)]"
	openDelay={0}
	closeDelay={50}
	closeOnClick={false}
	closeOnPointerDown={false}
	onclick={() => (open = !open)}
>
	{#snippet trigger()}<ScrollText size={20} />{/snippet}
	{#snippet content()}{@html thesis.description}{/snippet}
</Tooltip>
