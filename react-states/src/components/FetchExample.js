import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchExample() {
	const [users, setUsers] = useState(false);

	useEffect(() => {
		(async () => {
			let res = await axios("https://jsonplaceholder.typicode.com/users");
			setUsers(res.data);
		})();
	}, []);

	return (
		<div>
			<h1>Users</h1>
			{users ? (
				<ol>
					{users.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ol>
			) : (
				<b>Loading...</b>
			)}
		</div>
	);
}
