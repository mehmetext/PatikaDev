import { useState } from "react";

function App() {
	const [name, setName] = useState("Mehmet");
	const [age, setAge] = useState(21);

	return (
		<div className="App">
			<h1>Merhaba, {name}!</h1>
			<h2>{age}</h2>
			<button onClick={() => setName("Ahmet")}>Change Name</button>
			<button onClick={() => setAge(25)}>Change Age</button>
		</div>
	);
}

export default App;
