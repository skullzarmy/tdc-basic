<script>
	import { onMount } from 'svelte';
	var battleCount = null;
	var battleTez = null;
	var battlePlayed = null;
	var battleCancelled = null;
	var walletData = Array();
	var battleBalance = null;
	const battleWallet = 'KT1J8uugdkykcDx46ycEBxv3shNioDMvv1ad';

	onMount(async () => {
		updateBattleStats();
		setInterval(() => {
			updateBattleStats();
		}, 30000);
	});

	async function updateBattleStats() {
		// console.log('updating');
		let contractData = await fetch('https://api.tzkt.io/v1/contracts/' + battleWallet, {
			headers: { Accept: 'application/json' }
		}).catch((e) => console.log(e));
		let contract = await contractData.json();
		// console.log(contract);
		battleBalance = contract.balance / 1000000;
		let battleStore = await fetch('https://api.tzkt.io/v1/contracts/' + battleWallet + '/storage', {
			headers: { Accept: 'application/json' }
		}).catch((e) => console.log(e));
		let battleData = await battleStore.json();
		battleCount = battleData.gamesTotal;
		battleTez = JSON.stringify(battleData.flipped / 1000000);
		let battleGameStore = await fetch(
			'https://api.tzkt.io/v1/bigmaps/' + battleData.games + '/keys?limit=10000&sort=id',
			{
				headers: { Accept: 'application/json' }
			}
		).catch((e) => console.log(e));
		let battleGames = await battleGameStore.json();
		// console.log(battleGames);
		// status 1 = rug & 2 = double

		battlePlayed = null;
		battleCancelled = null;
		for (let g of battleGames) {
			let status = g.value.status;
			if (status == '1' || status == '2') {
				battlePlayed++;
			} else if (status == '3') {
				battleCancelled++;
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
			>Degen Battle Stats</span
		>
		<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" />
		{#if !battleBalance}
			<button href="/" class="btn btn-outline loading">
				battle Contract<span class="pl-1">loading</span>
			</button>
		{:else}
			<button
				href="https://better-call.dev/mainnet/{battleWallet}/storage"
				target="_blank"
				class="btn btn-primary md:self-end"
			>
				battle Contract<span class="pl-1">{battleBalance}</span>ꜩ
			</button>
		{/if}
	</div>

	<div class="container px-5 pb-24 pt-0 mx-auto">
		<div class="flex flex-wrap -m-4 text-center stats">
			<SingleStat value={battleCount} title="Games Started" />
			<SingleStat value={battleTez} title="Wagered" isTez="true" />
			<SingleStat value={battlePlayed} title="Games Played" />
			<SingleStat value={battleCancelled} title="Games Cancelled" />
		</div>
	</div>
</section>
