import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import $ from "jquery";
const poolWallet = "KT1K6TyRSsAxukmjDWik1EoExSKsTg9wGEEX";
const flipWallet = "KT1NkWx47WzJeHCSyB62WjLtFn4tRf3uXBur";
const battleWallet = "KT1J8uugdkykcDx46ycEBxv3shNioDMvv1ad";

export class App {
    private tk: TezosToolkit;

    constructor() {
        this.tk = new TezosToolkit("https://api.tez.ie/rpc/mainnet");
    }

    public initUI() {
        $("#balance-address-input").val(poolWallet);
        $("#flip-address-input").val(flipWallet);
        $("#battle-address-input").val(battleWallet);
        $("#bcd-link-flip").html(
            "<a href='https://better-call.dev/mainnet/" + flipWallet + "/storage' target='_blank'>BCD</a>"
        );
        $("#bcd-link-battle").html(
            "<a href='https://better-call.dev/mainnet/" + battleWallet + "/storage' target='_blank'>BCD</a>"
        );
        $("#bcd-link-pool").html(
            "<a href='https://better-call.dev/mainnet/" +
                poolWallet +
                "/interact?entrypoint=withdraw' target='_blank'>BCD Withdraw</a>"
        );
        // this.getFlipCount(flipWallet);
        // this.getFlipTez(flipWallet);
        this.getBalance(poolWallet, "balance");
        this.setupFlip(flipWallet);
        this.getBalance(flipWallet, "flip");
        this.setupBattle(battleWallet);
    }

    private showError(message: string, place: string) {
        $("#" + place + "-output")
            .removeClass()
            .addClass("hide");
        $("#" + place + "-error-message")
            .removeClass()
            .addClass("show")
            .html("Error: " + message);
    }

    private showBalance(balance: number, place: string) {
        $("#" + place + "-error-message")
            .removeClass()
            .addClass("hide");
        $("#" + place + "-output")
            .removeClass()
            .addClass("show");
        $("#" + place).html(balance);
    }

    private getBalance(address: string, place: string) {
        this.tk.rpc
            .getBalance(address)
            .then((balance) => this.showBalance(balance.toNumber() / 1000000, place))
            .catch((e) => this.showError("Address not found", place));
    }

    private showFlipCount(d) {
        console.log(d);
        $("#flip-error-message").removeClass().addClass("hide");
        $("#flip-count").html(d);
    }

    private showFlipTez(d) {
        console.log(d);
        $("#flip-error-message").removeClass().addClass("hide");
        $("#flip-tez").html(d);
    }

    private showBattleCount(d) {
        console.log(d);
        $("#battle-error-message").removeClass().addClass("hide");
        $("#battle-count").html(d);
    }

    private showBattleTez(d) {
        console.log(d);
        $("#battle-error-message").removeClass().addClass("hide");
        $("#battle-tez").html(d);
    }

    private setupFlip(address) {
        this.tk.contract
            .at(address)
            .then((myContract) => {
                return myContract.storage().then((myStorage) => {
                    this.showFlipCount(myStorage["gamesPlayed"].toNumber());
                    this.showFlipTez(myStorage["flipped"].toNumber() / 1000000);
                    $("#TheData").html(JSON.stringify(myStorage));

                    // console.log(myStorage["games"]);

                    // const tryThis = data.get("games");
                    // console.log(tryThis);
                });
            })
            .catch((e) => this.showError("data address not found", "flip"));
    }

    private setupBattle(address) {
        this.tk.contract
            .at(address)
            .then((myContract) => {
                return myContract.storage().then((myStorage) => {
                    this.showBattleCount(myStorage["gamesTotal"].toNumber());
                    this.showBattleTez(myStorage["flipped"].toNumber() / 1000000);
                    $("#TheBattleData").html(JSON.stringify(myStorage));

                    // console.log(myStorage["games"]);

                    // const tryThis = data.get("games");
                    // console.log(tryThis);
                });
            })
            .catch((e) => this.showError("data address not found", "flip"));
    }
}
