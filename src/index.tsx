import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

serviceWorkerRegistration.register();

// https://my-js.org/docs/guide/wb/#react-pwa
// https://tokmakov.msk.ru/blog/item/722
// https://web.dev/learn/pwa/workbox/
// https://dev.to/rikurouvila/react-hook-for-showing-custom-add-to-home-screen-prompt-472c
// https://create-react-app.dev/docs/making-a-progressive-web-app/
// https://cra.link/PWA
