import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
	const [number, setNumber] = useState(0);

	return (
		<div className="App">
			<Header />
			<h1>{number}</h1>
			<div>
				<button onClick={() => setNumber(number + 1)}>Arttır</button>
			</div>
		</div>
	);
}

export default App;
