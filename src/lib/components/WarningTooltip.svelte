<script lang="ts">
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
	import { TriangleAlert } from 'lucide-svelte';

	interface Props {
		msg: string;
	}

	let { msg }: Props = $props();
	let open = $state(false);
</script>

<Tooltip
	{open}
	onOpenChange={(e) => (open = e.open)}
	positioning={{ placement: 'top' }}
	base="flex items-center"
	triggerBase="btn-icon size-5! p-0 text-error-500"
	contentBase="card preset-filled-error-500 text-center p-4 max-w-[calc(100vw-30px)]"
	openDelay={0}
	closeDelay={50}
	closeOnClick={false}
	closeOnPointerDown={false}
	onclick={() => (open = !open)}
>
	{#snippet trigger()}<TriangleAlert size={18} />{/snippet}
	{#snippet content()}{msg}{/snippet}
</Tooltip>
