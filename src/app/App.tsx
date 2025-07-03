import "./App.css";
import { SolanaProvider } from "./providers/SolanaProvider/SolanaProvider";
import { HomePage } from "../pages/HomePage";

function App() {
    return (
        <SolanaProvider>
            <div className="app">
                <HomePage />
            </div>
        </SolanaProvider>
    );
}

export default App;
