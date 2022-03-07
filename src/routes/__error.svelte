<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        error, status,
      }
    };
  }
</script>

<script>
  export let error;
  export let status
</script>

<svelte:head>
	<title>{error.name} {status} – skllzrmy.tez... .com</title>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000">
	<meta name="msapplication-TileColor" content="#000000">
	<meta name="theme-color" content="#000000">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600&family=Smooch+Sans:wght@100;400;800&display=swap" rel="stylesheet">
</svelte:head>
<div class="flex flex-col space-y-10 items-center">
    <h1 class="text-3xl text-red-600 text-center pt-10">{error.name} {status}</h1>
    <h3 class="text-2xl text-center">{error.message}</h3>
    <span><a href="/" class="text-2xl text-center underline hover:no-underline hover:text-green-800">[back to home]</a></span>
</div>