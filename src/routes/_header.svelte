<script>
	const poolWallet = 'KT1K6TyRSsAxukmjDWik1EoExSKsTg9wGEEX';
	var poolBalance = null;
	updatePoolBalance();
	setInterval(() => {
		updatePoolBalance();
	}, 30000);
	async function updatePoolBalance() {
		console.log('updating balance');
		let poolInstance = await fetch('https://api.tzkt.io/v1/contracts/' + poolWallet, {
			headers: { Accept: 'application/json' }
		}).catch((e) => console.log(e));
		let poolData = await poolInstance.json();
		poolBalance = poolData.balance / 1000000;
	}
</script>

<header class="text-gray-400 bg-transparent body-font shadow w-full">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a
			href="/"
			class="flex order-first lg:order-none title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
		>
			<img src="/coinlogo.png" alt="TDC Logo" />
			<span class="ml-5 text-xl xl:block">TezosDegenClub (unofficial) Dashboard</span>
		</a>
		<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" />
		{#if !poolBalance}
			<button href="/" class="btn btn-outline loading">
				Pool Wallet<span class="pl-1">loading</span>
			</button>
		{:else}
			<button
				href="https://better-call.dev/mainnet/{poolWallet}/interact?entrypoint=withdraw"
				target="_blank"
				class="btn btn-accent"
			>
				Pool Wallet<span class="pl-1">{poolBalance}</span>ꜩ
			</button>
		{/if}
	</div>
</header>
