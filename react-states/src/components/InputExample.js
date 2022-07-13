import { useState } from "react";

export default function InputExample() {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const onChangeSurname = (e) => {
		setSurname(e.target.value);
	};

	return (
		<div>
			<label htmlFor="name">
				Please enter a name <br />
				<input
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<br />
			<label htmlFor="surname">
				Please enter a surname <br />
				<input
					id="surname"
					value={surname}
					onChange={onChangeSurname}
				/>
			</label>
			<br />
			{name || surname ? `${name} ${surname}` : "no name"}
		</div>
	);
}
