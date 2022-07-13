import { useState } from "react";

function App() {
	const [name, setName] = useState("Mehmet");
	const [age, setAge] = useState(21);
	const [friends, setFriends] = useState(["Ahmet", "Murat"]);
	const [adres, setAdres] = useState({ title: "Aksaray", zip: 68100 });

	return (
		<div className="App">
			<h1>Merhaba, {name}!</h1>
			<h2>{age}</h2>
			<button onClick={() => setName("Ahmet")}>Change Name</button>
			<button onClick={() => setAge(25)}>Change Age</button>

			<hr />
			{friends && (
				<>
					<h1>Friends</h1>
					{friends.map((friend, i) => (
						<div key={i}>{friend}</div>
					))}
				</>
			)}

			<button onClick={() => setFriends([...friends, "Ayşe"])}>
				Add Friend
			</button>

			<hr />

			<h2>Address</h2>
			<div>
				{adres.title} {adres.zip}
			</div>

			<button onClick={() => setAdres({ ...adres, title: "Konya" })}>
				Change Address
			</button>
		</div>
	);
}

export default App;
