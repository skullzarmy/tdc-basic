// import { TezosToolkit } from '@taquito/taquito';
// const Tezos = new TezosToolkit('https://mainnet.smartpy.io/');
// const poolWallet = 'KT1K6TyRSsAxukmjDWik1EoExSKsTg9wGEEX';
// const flipWallet = 'KT1NkWx47WzJeHCSyB62WjLtFn4tRf3uXBur';
// export let flipCount = 0;
// export let flipTez = 0;
// Tezos.contract
//     .at(flipWallet)
//     .then((myContract) => {
//         return myContract.storage().then((myStorage) => {
//             flipCount = myStorage['gamesPlayed'].toNumber();
//             console.log('flip count is ' + flipCount);
//             flipTez = myStorage['flipped'].toNumber() / 1000000;
//             console.log('flip tez is ' + flipTez);
//             // myStorage['games'].get(0).then((games) => {
//             //     console.log(games['status'].c);
//             // });
//             // for (let i = 0; i < Object.keys(games).length; i++) {
//             // 	console.log(games[Object.keys(games)[i]]);
//             // }
//         });
//     })
//     .catch((e) => console.log(e));