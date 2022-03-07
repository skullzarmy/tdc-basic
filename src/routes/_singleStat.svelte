<script>
	export let value;
	export let title;
	export let isTez;
</script>

<div class="p-4 sm:w-1/4 w-1/2 stat">
	<h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
		{#if !value}
			<div class="btn loading outline">loading</div>
		{:else if isTez}
			<span class="stat-value">{value}</span>ꜩ
		{:else}
			<span class="stat-value">{value}</span>
		{/if}
	</h2>
	<p class="leading-relaxed stat-title">{title}</p>
</div>
