import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
	const [visible, setVisible] = useState(false);

	return (
		<div className="App">
			{visible && <Counter />}
			<button onClick={() => setVisible(!visible)}>
				{visible ? "Gizle" : "Göster"}
			</button>
		</div>
	);
}

export default App;
