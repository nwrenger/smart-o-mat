<svelte:head>
	<title>FAQ - Smart-O-Mat</title>
	<meta
		name="description"
		content="Häufig gestellte Fragen - Weitere Informationen über den Smart-O-Maten."
	/>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-4">
	<a href="/" class="anchor font-['JetBrainsMono']"><p>← Zurück</p></a>

	<section class="space-y-3">
		<h4 class="h4">Wer hat ihn entwickelt?</h4>
		<p>
			Das war ich, Nils Wrenger, ein Schüler, welcher "ein wenig" programmieren kann. Andere
			Projekte von mir können Sie <a
				href="https://nwrengern.dev/projects"
				class="anchor"
				target="_blank">hier</a
			>
			finden! Wenn Sie mich für meine Arbeit unterstützen möchten, können Sie das
			<a href="https://github.com/sponsors/nwrenger" class="anchor" target="_blank">hier</a> machen.
		</p>
	</section>

	<section class="space-y-3">
		<h4 class="h4">Wo kann man das Projekt finden?</h4>
		<p>
			<a href="https://github.com/nwrenger/smart-o-mat" target="_blank" class="anchor">Hier</a> auf GitHub.
			Es ist unter der MIT-License veröffentlicht, kann also von jedem einfach kopiert bzw. weiterverwendet
			werden.
		</p>
	</section>

	<section class="space-y-3">
		<h4 class="h4">Warum hab ich das gemacht?</h4>
		<p>
			Ich hatte mir aus langeweile mal den Source Code bzw. Quellcode des Wahl-O-Maten angesehen und
			konnte nicht glauben, wie schrecklich dieser aussah:
		</p>
		<ul class="list-inside list-disc space-y-2">
			<li>
				Kein Nutzen aktueller Webtechnologien, wie einem Web-Framework (z.B. React, Svelte, Vite,
				...) oder CSS-Framework (z.B. tailwindcss).
			</li>
			<li>
				Eine Custom template engine mit schrecklichen Definitionen für die Datenpunkte, z.B. siehe <a
					class="anchor"
					href="https://wahl-o-mat.de/bundestagswahl2025/app/definitionen/module_definition.js"
					target="_blank">hier</a
				>.
			</li>
		</ul>
		<p>
			Auch das Design fande ich an einigen Stellen optimierbar (z.B. die Thesenansicht) und mir
			fehlten Funktionen wie:
		</p>
		<ul class="list-inside list-disc space-y-2">
			<li>Das automatische Speichern des aktuellen Standes.</li>
			<li>Das Teilen seiner Antworten.</li>
			<li>
				Vergleich und Einordung in aktuelle Wahlumfragen, um eine fundierte Wahlentscheidung zu
				ermöglichen.
			</li>
			<li>Generell ein simpleres Design (z.B. keine Parteienauswahl).</li>
		</ul>
	</section>

	<section class="space-y-3">
		<h4 class="h4">Datenschutz?!?</h4>

		<p>
			Ich selber erhebe keine Daten! Ihre Antworten der Thesen werden nur bei ihnen lokal im sog. <code
				class="code">Lokal Storage</code
			>
			gespeichert. Die Seite ist bei Github Pages gehostet, konsultieren Sie bitte
			<a
				href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
				target="_blank"
				class="anchor">deren Datenschutzerklärung</a
			>.
		</p>
	</section>

	<section class="space-y-3">
		<h4 class="h4">Weitere Inhaltliche Fragen</h4>

		<p>
			Bei inhaltlichen Fragen kann ich ihnen hier nicht weiterhelfen. Gucken Sie doch bei <a
				href="https://www.wahl-o-mat.de/bundestagswahl2025/"
				target="_blank"
				class="anchor">FAQ des Wahl-O-Maten</a
			> nach!
		</p>
	</section>
</div>
