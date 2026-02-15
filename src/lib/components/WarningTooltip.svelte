<script lang="ts">
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';
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
	openDelay={50}
	closeDelay={50}
	closeOnClick={false}
	closeOnPointerDown={false}
>
	<Tooltip.Trigger class="btn-icon text-error-500 size-5! p-0" onclick={() => (open = !open)}>
		<TriangleAlert size={18} />
	</Tooltip.Trigger>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content
				class="card preset-filled-error-500 max-w-[calc(100vw-50px)] p-4 text-center"
			>
				{msg}
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip>
