import type { Progress } from '$lib';
import { persistedState } from 'svelte-persisted-state';
import { theses } from './consts';

export const progress = persistedState<Progress>('progress', progressDefault());

export function progressDefault(): Progress {
	return { current_thesis: 0, user_positions: theses.map((_) => undefined), url: undefined };
}
