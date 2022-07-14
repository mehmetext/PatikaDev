import "./App.css";

import { useEffect, useState } from "react";

function App() {
	const [number, setNumber] = useState(0);
	const [name, setName] = useState("Mehmet");

	useEffect(() => {
		console.log("State güncellendi");
	});

	useEffect(() => {
		console.log("Component mount edildi");
	}, []);

	useEffect(() => {
		console.log("isim değişti: ", name);
	}, [name]);

	return (
		<div className="App">
			<div>{number}</div>
			<button onClick={() => setNumber(number + 1)}>Arttır</button>
			<div>{name}</div>
			<button
				onClick={() => setName(name === "Mehmet" ? "Ali" : "Mehmet")}
			>
				İsim Değiştir{" "}
			</button>
		</div>
	);
}

export default App;
