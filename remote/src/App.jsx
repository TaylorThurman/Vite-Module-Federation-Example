import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Button.jsx";

function App() {
    const [count, setCount] = useState(0);

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
