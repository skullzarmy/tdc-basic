import { App } from "./app";
new App().initUI();
window.setInterval(function () {
    new App().initUI();
}, 30000);
