<script lang="ts">
	import '../app.css';
	import { Dot, Lightbulb } from 'lucide-svelte';

	let { children } = $props();
</script>

<div class="mx-auto flex h-full max-w-(--breakpoint-2xl) flex-col space-y-3 px-4 py-5 md:px-10">
	<header class="shrink-0">
		<div class="flex h-12 w-full items-center justify-between">
			<a class="flex items-center justify-center space-x-2" href="/" title="Startseite">
				<Lightbulb size={32} />
				<h4 class="h4">Smart-O-Mat</h4>
			</a>
			<div class="flex items-center md:space-x-2">
				<a href="/faq" title="FAQ" class="anchor w-10 truncate text-black md:w-fit dark:text-white">
					FAQ
				</a>
				<Dot />
				<a
					href="https://nwrenger.dev/datenschutz"
					title="Datenschutz"
					class="anchor w-10 truncate text-black md:w-fit dark:text-white"
				>
					Datenschutz
				</a>
				<Dot />
				<a
					href="https://github.com/nwrenger/smart-o-mat"
					target="_blank"
					rel="noopener noreferrer"
					title="Github"
					class="anchor w-10 truncate text-black md:w-fit dark:text-white"
				>
					Github
				</a>
			</div>
		</div>
	</header>

	<main class="space-y-4">
		{@render children()}
	</main>
</div>
