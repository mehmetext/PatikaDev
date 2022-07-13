import "./App.css";
import User from "./components/User";

function App() {
	return (
		<>
			<User name="Mehmet" surname="Konukçu" isLoggedIn={true} age={21} />
		</>
	);
}

export default App;
