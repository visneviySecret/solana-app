import React from "react";
import { SolanaProvider } from "./providers/SolanaProvider/SolanaProvider";
import { HomePage } from "../pages/HomePage";
import { GlobalStyle, AppContainer } from "./App.styles";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <SolanaProvider>
                    <HomePage />
                </SolanaProvider>
            </AppContainer>
        </>
    );
};

export default App;
