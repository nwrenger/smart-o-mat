import type { Progress } from '$lib';
import { writable } from '@macfja/svelte-persistent-store';
import { theses } from './consts';

export const progress = writable<Progress>('progress', progressDefault());

export function progressDefault(): Progress {
	return { current_thesis: 0, user_positions: theses.map((_) => undefined), url: undefined };
}
