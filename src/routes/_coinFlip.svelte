<script>
	// import { flipCount, flipTez } from '../routes/_coinFlip.js';
	import { onMount } from 'svelte';
	import { TezosToolkit } from '@taquito/taquito';
	// import { ContractAbstraction, Wallet } from '@taquito/taquito';
	let flipCount = null;
	let flipTez = null;
	const poolWallet = 'KT1K6TyRSsAxukmjDWik1EoExSKsTg9wGEEX';
	const flipWallet = 'KT1NkWx47WzJeHCSyB62WjLtFn4tRf3uXBur';
	let Tezos = TezosToolkit;
	onMount(async () => {
		Tezos = new TezosToolkit('https://mainnet.smartpy.io/');
		const contract = await Tezos.contract.at(flipWallet);
		// const storage = await contract.storage();
		// flipCount = await storage['gamesPlayed'];
	});
	// let flipStats = getFlipStats();
</script>

<section class="text-gray-400 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap -m-4 text-center">
			<div class="p-4 sm:w-1/4 w-1/2">
				<h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
					{#if !flipCount}
						"loading"
					{:else}
						{flipCount}
					{/if}
				</h2>
				<p class="leading-relaxed">Games Played</p>
			</div>
			<div class="p-4 sm:w-1/4 w-1/2">
				<h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
					<span>
						{#if !flipTez}
							"loading"
						{:else}
							{flipTez}
						{/if}
					</span>ꜩ
				</h2>
				<p class="leading-relaxed">Wagered</p>
			</div>
			<div class="p-4 sm:w-1/4 w-1/2">
				<h2 class="title-font font-medium sm:text-4xl text-3xl text-white">0</h2>
				<p class="leading-relaxed">Doubles (wins)</p>
			</div>
			<div class="p-4 sm:w-1/4 w-1/2">
				<h2 class="title-font font-medium sm:text-4xl text-3xl text-white">0</h2>
				<p class="leading-relaxed">Rugs (losses)</p>
			</div>
		</div>
	</div>
</section>
