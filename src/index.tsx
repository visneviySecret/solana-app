import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { SolanaProvider } from "./app/providers/SolanaProvider/SolanaProvider";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <SolanaProvider>
            <App />
        </SolanaProvider>
    </React.StrictMode>
);
