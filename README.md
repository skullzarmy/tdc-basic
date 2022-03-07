# TDC Hodlers Dashboard

## Live Version

[![Netlify Status](https://api.netlify.com/api/v1/badges/643316d9-36d8-4177-80e8-287db4062569/deploy-status)](https://app.netlify.com/sites/vigilant-golick-726bee/deploys)

This dashboard is hosted via Netlify and can be viewed at https://tdc.skllzrmy.com

## Info

A dashboard to show stats on TezosDegenClub gaming.

## To-Do

1. ~~Migrate to Taquito React boilerplate (in progress, new branch coming soon)~~ **I ended up migrating to sveltekit and dumped taquito. Now powered by TzKT.io API**
2. ~~Wallet sync (DONE in React branch) + access requires holding TDC NFTs (?)~~ 
3. ~~Reading BigMap data and reporting on games played (i.e. wins/losses, luckiest player, least lucky, etc.)~~
4. Data visualization and charts
5. Withdraw for TDC holders through app UI

## Dependencies

1. jQuery - for simple manipulation and traversal of HTML documents.
2. parcel-bundler - for packaging web applications quickly.
3. sveltekit
4. tailwind css

## Getting Started

1. Fork this repository
2. Clone your new repository:
3. Change your current working directory to the newly cloned repository directory.
4. Install dependencies:

    `npm install`

5. Start development server:

    `npm run watch`

6. Open http://localhost:1234 in your browser to see a sample application.

[logo]: https://raw.githubusercontent.com/ecadlabs/taquito-boilerplate/master/assets/built-with-taquito.png "Built with Taquito"