<script lang="ts">
	import { State, stateColor, stateText } from '$lib';
	import { Check, CircleSlash, Dot, X } from 'lucide-svelte';

	interface Props {
		state: State | undefined;
	}

	let { state }: Props = $props();
</script>

<span class="btn-icon rounded-full {stateColor(state)}" title={stateText(state)}>
	{#if state == State.Approve}
		<Check />
	{:else if state == State.Neutral}
		<Dot />
	{:else if state == State.Disprove}
		<X />
	{:else}
		<CircleSlash />
	{/if}
</span>
