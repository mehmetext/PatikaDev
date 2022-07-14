import { useEffect, useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);
	const [name, setName] = useState("Mehmet");

	const interval = useEffect(() => {
		console.log("Component mount edildi");
		const interval = setInterval(() => {
			setNumber((n) => n + 1);
		}, 1000);

		return () => {
			console.log("Component unmount edildi");
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		console.log("isim değişti: ", name);
	}, [name]);

	return (
		<>
			<div>{number}</div>
			<button onClick={() => setNumber(number + 1)}>Arttır</button>
			<div>{name}</div>
			<button
				onClick={() => setName(name === "Mehmet" ? "Ali" : "Mehmet")}
			>
				İsim Değiştir{" "}
			</button>
		</>
	);
}
