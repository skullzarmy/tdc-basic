<script context="module">
	export const prerender = true;
	import CoinFlip from '../routes/_coinFlip.svelte';
	import DegenBattle from '../routes/_degenBattle.svelte';
</script>

<svelte:head>
	<title>TDC Hodler Dash</title>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
	<meta name="msapplication-TileColor" content="#000000" />
	<meta name="theme-color" content="#000000" />
	<!-- <script
		src="https://unpkg.com/@taquito/taquito@11.2.0-beta-RC.0/dist/taquito.min.js"
		crossorigin="anonymous"
		integrity="sha384-xxD6xXwrySOXsNY/7nuDQL14yoB/rz8DYUc3lPfDpaWrICSCUFXqpG1Mp44N9BA1"></script> -->
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
	<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
	<!-- <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600&family=Smooch+Sans:wght@100;400;800&display=swap" rel="stylesheet"> -->
</svelte:head>
<section class="text-gray-400 body-font">
	<CoinFlip />
</section>
<section class="text-gray-400 body-font">
	<DegenBattle />
</section>
