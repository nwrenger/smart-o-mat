import { goto } from '$app/navigation';
import { page } from '$app/state';

export interface EvaluatedParty {
	party: Party;
	matchPercentage: number;
}

export interface Party {
	abbreviation: string;
	name: string;
	description: string;
	logo: string;
	positions: PartyPosition[];
}

export interface PartyPosition {
	state: State;
	reason: string;
}

export interface Thesis {
	label: string;
	description: string;
}

export interface Progress {
	current_thesis: number;
	user_positions: (UserPosition | undefined)[];
	url: string | undefined;
}

export interface UserPosition {
	state: State;
	double_weighted: boolean;
}

export enum State {
	Approve,
	Neutral,
	Disprove
}

/** Get the bg color based on state. */
export function stateColor(state: State | undefined): string {
	if (state == State.Approve) {
		return 'preset-filled-success-500';
	} else if (state == State.Neutral) {
		return 'preset-filled';
	} else if (state == State.Disprove) {
		return 'preset-filled-error-500';
	} else {
		return 'preset-filled-surface-300-700';
	}
}

/** Get the state text. */
export function stateText(state: State | undefined): string {
	if (state == State.Approve) {
		return 'stimme zu';
	} else if (state == State.Neutral) {
		return 'neutral';
	} else if (state == State.Disprove) {
		return 'stimme nicht zu';
	} else {
		return 'Übersprungen';
	}
}

/** Evaluates and sorts the users progress to the parties. */
export function evaluate_user_vote(progress: Progress, parties: Party[]): EvaluatedParty[] {
	const { user_positions } = progress;

	return parties
		.map((party) => {
			let totalPoints = 0;
			let maxPoints = 0;

			party.positions.forEach((partyPosition, index) => {
				const userPosition = user_positions[index];
				if (!userPosition) return;

				const weight = userPosition.double_weighted ? 2 : 1;
				maxPoints += 2 * weight;

				if (userPosition.state === partyPosition.state) {
					totalPoints += 2 * weight;
				} else if (
					(userPosition.state === State.Approve && partyPosition.state === State.Neutral) ||
					(userPosition.state === State.Disprove && partyPosition.state === State.Neutral)
				) {
					totalPoints += 1 * weight;
				}
			});

			const matchPercentage = maxPoints > 0 ? (totalPoints / maxPoints) * 100 : 0;
			return { party, matchPercentage };
		})
		.sort((a, b) => b.matchPercentage - a.matchPercentage);
}

export function removeQuery(name: string, replace = false) {
	const url = page.url;
	url.searchParams.delete(name);
	goto(url.toString(), {
		replaceState: replace
	});
}
