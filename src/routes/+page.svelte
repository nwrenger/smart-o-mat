<script lang="ts">
	import { goto } from '$app/navigation';
	import { flyin, opacity } from '$lib/animations';
	import { progress, progressDefault } from '$lib/state';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { X } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Smart-O-Mat</title>
	<meta
		name="description"
		content="Der Smart-O-Mat ist eine weiterentwickelte Version des Wahl-O-Maten. Alle 29 Parteien, die zur Wahl antreten, haben die Wahl-O-Mat-Thesen beantwortet. Jetzt sind Sie an der Reihe: Vergleichen Sie Ihre Standpunkte mit den Antworten der Parteien."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Smart-O-Mat" />
	<meta
		property="og:description"
		content="Der Smart-O-Mat ist eine weiterentwickelte Version des Wahl-O-Maten. Alle 29 Parteien, die zur Wahl antreten, haben die Wahl-O-Mat-Thesen beantwortet. Jetzt sind Sie an der Reihe: Vergleichen Sie Ihre Standpunkte mit den Antworten der Parteien."
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
		{#if progress.current.url}
			<Dialog>
				<Dialog.Trigger class="btn preset-filled-primary-500">Start</Dialog.Trigger>
				<Portal>
					<Dialog.Backdrop
						class="bg-surface-50-950/50 fixed inset-0 z-50 backdrop-blur-sm {opacity}"
					/>
					<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
						<Dialog.Content
							class="card bg-surface-100-900 max-w-screen-sm space-y-4 p-4 shadow-xl {flyin}"
						>
							<header class="flex items-center justify-between">
								<Dialog.Title class="text-2xl font-bold">Speicherstand gefunden!</Dialog.Title>
								<Dialog.CloseTrigger class="btn-icon hover:text-surface-950-50 hover:preset-tonal">
									<X class="size-4" />
								</Dialog.CloseTrigger>
							</header>
							<Dialog.Description>
								<p>
									Sie haben den Smart-O-Mat bereits begonnen. Möchten Sie dort weitermachen, wo Sie
									bisher aufgehört haben?
								</p>
							</Dialog.Description>
							<footer class="flex justify-end gap-2">
								<button
									title="Nein"
									type="button"
									class="btn preset-filled"
									onclick={() => {
										progress.current = progressDefault();
										goto('/answering');
									}}>Nein</button
								>
								<a class="btn preset-filled-primary-500" href={progress.current.url} title="Ja">
									Ja
								</a>
							</footer>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog>
		{:else}
			<a class="btn preset-filled-primary-500" href="/answering">Start</a>
		{/if}
	</div>
</div>
