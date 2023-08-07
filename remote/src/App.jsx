import './App.css'
import Button from "./Button.jsx";
import useCount from "./store.js";

function App() {
    const [count, setCount] = useCount(0);

    return (
        <div className="App">
            <h1>Remote Application</h1>
            <Button/>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    );
}

export default App
