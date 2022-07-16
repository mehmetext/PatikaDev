import "./styles.css";
import { useCallback, useState } from "react";
import Header from "./components/Header";

function App() {
	const [number, setNumber] = useState(0);
	const [text, setText] = useState("");

	const increment = useCallback(() => setNumber((number) => number + 1), []);

	return (
		<div className="App">
			<Header />
			<h1>{number}</h1>
			<div>
				<button onClick={increment}>Arttır</button>
			</div>
			<br />
			<div>
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</div>
		</div>
	);
}

export default App;
