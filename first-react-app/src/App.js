import "./App.css";
import User from "./components/User";

const friends = [
	{ id: 0, name: "Ahmet" },
	{ id: 1, name: "Tayfun" },
	{ id: 2, name: "Ayşe" },
];

function App() {
	return (
		<>
			<User
				name="Mehmet"
				surname="Konukçu"
				isLoggedIn={true}
				age={21}
				friends={friends}
			/>
		</>
	);
}

export default App;
