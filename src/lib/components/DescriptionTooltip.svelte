<script lang="ts">
	import type { Thesis } from '$lib';
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';
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
	openDelay={50}
	closeDelay={50}
	closeOnClick={false}
	closeOnPointerDown={false}
>
	<Tooltip.Trigger class="btn-icon" onclick={() => (open = !open)}>
		<ScrollText size={20} /></Tooltip.Trigger
	>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content class="card preset-filled max-w-[calc(100vw-50px)] p-4 text-center">
				{@html thesis.description}
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip>
