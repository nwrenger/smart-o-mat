<script>
	import { ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>FAQ - Smart-O-Mat</title>
	<meta
		name="description"
		content="Häufig gestellte Fragen – Weitere Informationen über den Smart-O-Maten."
	/>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-4">
	<a href="/" class="anchor flex items-center justify-start space-x-2">
		<ArrowLeft size={18} />
		<p>Zurück</p>
	</a>

	<section class="space-y-3">
		<h4 class="h4">Wer hat ihn entwickelt?</h4>
		<p>
			Ich bin Nils Wrenger, ein Schüler, der „ein wenig“ programmieren kann. Eine Übersicht über
			meine weiteren Projekte finden Sie
			<a href="https://nwrengern.dev/projects" class="anchor" target="_blank">
				auf meiner Projektseite
			</a>. Wenn Sie meine Arbeit unterstützen möchten, können Sie das gern
			<a href="https://github.com/sponsors/nwrenger" class="anchor" target="_blank">
				über GitHub Sponsors
			</a>
			tun.
		</p>
	</section>

	<section class="space-y-3">
		<h4 class="h4">Wo kann man das Projekt finden?</h4>
		<p>
			Den Smart-O-Mat finden Sie
			<a href="https://github.com/nwrenger/smart-o-mat" target="_blank" class="anchor">
				auf GitHub
			</a>. Er ist unter der MIT-Lizenz veröffentlicht und kann daher von jeder Person kopiert und
			weiterverwendet werden.
		</p>
	</section>

	<section class="space-y-3">
		<h4 class="h4">Warum habe ich das gemacht?</h4>
		<p>
			Irgendwann habe ich mir aus Langeweile den Quellcode des Wahl-O-Maten angeschaut und war
			überrascht, wie altmodisch er an vielen Stellen wirkte:
		</p>
		<ul class="list-inside list-disc space-y-2">
			<li>
				Keine aktuellen Webtechnologien wie React, Svelte, Vite oder moderne CSS-Frameworks (z.B.
				Tailwind).
			</li>
			<li>
				Eine eigene Template Engine mit sehr komplizierten Definitionen für Datenpunkte, zum
				Beispiel im
				<a
					class="anchor"
					href="https://wahl-o-mat.de/bundestagswahl2025/app/definitionen/module_definition.js"
					target="_blank"
				>
					Quelltext der Module
				</a>.
			</li>
		</ul>
		<p>
			Auch das Design fand ich an manchen Stellen verbesserungswürdig (z.B. bei der Thesenansicht),
			und mir fehlten verschiedene Funktionen:
		</p>
		<ul class="list-inside list-disc space-y-2">
			<li>Automatisches Speichern des aktuellen Stands</li>
			<li>Teilen der eigenen Antworten per Link</li>
			<li>
				Vergleich und Einordnung in aktuelle Wahlumfragen, um eine fundierte Wahlentscheidung zu
				ermöglichen
			</li>
			<li>Ein schlichtes, übersichtliches Design (ohne extra Parteienauswahl)</li>
		</ul>
	</section>

	<section class="space-y-3">
		<h4 class="h4">Datenschutz?!?</h4>
		<p>
			Ich selbst erhebe keine Daten. Ihre Antworten werden nur lokal in Ihrem
			<code class="code">Local Storage</code> gespeichert. Die Seite wird über GitHub Pages
			gehostet. Weitere Informationen finden Sie in
			<a
				href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
				target="_blank"
				class="anchor"
			>
				GitHubs Datenschutzerklärung
			</a>.
		</p>
	</section>

	<section class="space-y-3">
		<h4 class="h4">Weitere inhaltliche Fragen</h4>
		<p>
			Bei inhaltlichen Fragen kann ich leider nicht weiterhelfen. Schauen Sie stattdessen in den
			<a href="https://www.wahl-o-mat.de/bundestagswahl2025/" target="_blank" class="anchor">
				FAQ-Bereich des Wahl-O-Maten
			</a>
			vorbei.
		</p>
	</section>
</div>
