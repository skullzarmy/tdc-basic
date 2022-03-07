<script>
	import { onMount } from 'svelte';
	var flipCount = null;
	var flipTez = null;
	var flipWins = null;
	var flipLosses = null;
	var walletData = Array();
	var flipBalance = null;
	const flipWallet = 'KT1NkWx47WzJeHCSyB62WjLtFn4tRf3uXBur';
	onMount(async () => {
		updateCoinFlip();
		setInterval(() => {
			updateCoinFlip();
		}, 30000);
	});
	async function updateCoinFlip() {
		let contractData = await fetch('https://api.tzkt.io/v1/contracts/' + flipWallet, {
			headers: { Accept: 'application/json' }
		}).catch((e) => console.log(e));
		let contract = await contractData.json();
		flipBalance = contract.balance / 1000000;
		let flipStore = await fetch('https://api.tzkt.io/v1/contracts/' + flipWallet + '/storage', {
			headers: { Accept: 'application/json' }
		}).catch((e) => console.log(e));
		let flipData = await flipStore.json();
		flipCount = flipData.gamesPlayed;
		flipTez = JSON.stringify(flipData.flipped / 1000000);
		let flipGameStore = await fetch(
			'https://api.tzkt.io/v1/bigmaps/' + flipData.games + '/keys?limit=10000&sort=id',
			{
				headers: { Accept: 'application/json' }
			}
		).catch((e) => console.log(e));
		let flipGames = await flipGameStore.json();
		// console.log(flipGames);
		// status 1 = rug & 2 = double

		flipWins = null;
		flipLosses = null;
		for (let g of flipGames) {
			let status = g.value.status;
			if (status == '2') {
				flipWins++;
			} else {
				flipLosses++;
			}
			let playerWallet = g.value.player;
			let gameInfo = [];
		}
	}
	// let SingleStats = getSingleStats();

	import SingleStat from './_singleStat.svelte';
</script>

<section class="text-gray-400 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<span
			class="flex order-first lg:order-none title-font font-medium text-2xl underline items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
			>Coin Flip Stats</span
		>
		<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" />
		{#if !flipBalance}
			<button href="/" class="btn btn-outline loading">
				Flip Contract<span class="pl-1">loading</span>
			</button>
		{:else}
			<button
				href="https://better-call.dev/mainnet/{flipWallet}/storage"
				target="_blank"
				class="btn btn-primary md:self-end"
			>
				Flip Contract<span class="pl-1">{flipBalance}</span>ꜩ
			</button>
		{/if}
	</div>

	<div class="container px-5 pb-24 pt-0 mx-auto">
		<div class="flex flex-wrap -m-4 text-center stats">
			<SingleStat value={flipCount} title="Games Played" />
			<SingleStat value={flipTez} title="Wagered" isTez="true" />
			<SingleStat value={flipWins} title="Doubles (wins)" />
			<SingleStat value={flipLosses} title="Rugs (losses)" />
		</div>
	</div>
</section>
