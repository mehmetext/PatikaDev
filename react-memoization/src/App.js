import "./styles.css";
import { useState, useMemo } from "react";
import Header from "./components/Header";

function App() {
	const [number, setNumber] = useState(0);
	const [text, setText] = useState("");

	const data = useMemo(() => {
		return calculateData(number);
	}, [number]);

	return (
		<div className="App">
			<Header data={data} />
			<h1>{number}</h1>
			<div>
				<button onClick={() => setNumber(number + 1)}>Arttır</button>
			</div>
			<br />
			<div>
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</div>
		</div>
	);
}

function calculateData(number) {
	console.log("calculating");
	for (let i = 0; i < 1000000000; i++) {}
	console.log("calculating ended");
	return { name: "Mehmet", number };
}

export default App;
