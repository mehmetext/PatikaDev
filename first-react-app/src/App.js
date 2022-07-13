import "./App.css";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<h1>Hello React</h1>
			<Header />
			<p className="xyz">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
				consectetur metus turpis, at imperdiet leo suscipit sed. Etiam
				quis diam a est congue auctor quis et odio.
			</p>

			<label htmlFor="myInput">
				Name:
				<input id="myInput" />
			</label>
		</div>
	);
}

export default App;
