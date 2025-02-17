<script lang="ts">
	import { goto } from '$app/navigation';
	import { progress, progressDefault } from '$lib/store';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
</script>

<svelte:head>
	<title>Smart-O-Mat</title>
	<meta
		name="description"
		content="Der Smart-O-Mat ist eine weiterentwickelte Version des Wahl-O-Maten. Alle 29 Parteien, die zur Wahl antreten, haben die Wahl-O-Mat-Thesen, die hier als Datensatz verwendet werden, beantwortet. Jetzt sind Sie an der Reihe: Vergleichen Sie Ihre Standpunkte mit den Antworten der Parteien."
	/>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-4">
	<p>
		Der Smart-O-Mat ist eine weiterentwickelte Version des Wahl-O-Maten. Alle 29 Parteien, die zur
		Wahl antreten, haben die Wahl-O-Mat-Thesen, die hier als Datensatz verwendet werden,
		beantwortet. Jetzt sind Sie an der Reihe: Vergleichen Sie Ihre Standpunkte mit den Antworten der
		Parteien.
	</p>

	<p>
		Der Smart-O-Mat ist keine Wahlempfehlung, sondern ein Informationsangebot über Wahlen und
		Politik.
	</p>

	<p>
		Sie müssen sich auch keine Sorgen über Datenverlust machen! Ihre Eingaben werden lokal
		Zwischengespeichert.
	</p>

	<div>
		{#if $progress.url}
			<Modal
				triggerBase="btn preset-filled-primary-500"
				contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
				backdropClasses="backdrop-blur-sm"
			>
				{#snippet trigger()}Start{/snippet}
				{#snippet content()}
					<header class="flex justify-between">
						<h3 class="h3">Speicherstand gefunden!</h3>
					</header>
					<article>
						<p class="opacity-80">
							Sie haben den Smart-O-Mat bereits begonnen. Möchten Sie dort weitermachen, wo Sie
							bisher aufgehört haben?
						</p>
					</article>
					<footer class="flex justify-end gap-4">
						<a class="btn preset-filled-primary-500" href={$progress.url} title="Ja">Ja</a>
						<button
							title="Nein"
							type="button"
							class="btn preset-filled"
							onclick={() => {
								progress.set(progressDefault());
								goto('/answering');
							}}>Nein</button
						>
					</footer>
				{/snippet}
			</Modal>
		{:else}
			<a class="btn preset-filled-primary-500" href="/answering">Start</a>
		{/if}
	</div>
</div>
