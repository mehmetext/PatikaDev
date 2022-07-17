import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function Profile() {
	const { user, setUser } = useUser();
	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
		setLoading(true);
		setTimeout(() => {
			setUser({ id: 1, username: "memedim", bio: "slm cnm" });
			setLoading(false);
		}, 1000);
	};

	return (
		<div>
			<h2>{user.username}</h2>
			{!user && (
				<button onClick={handleLogin}>
					{!loading ? "Login" : "loading..."}
				</button>
			)}

			{user && (
				<button
					onClick={() => {
						setUser(false);
					}}
				>
					Logout
				</button>
			)}
		</div>
	);
}
