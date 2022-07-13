import { useState } from "react";

export default function InputExample() {
	const [form, setForm] = useState({ name: "", surname: "" });

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
		console.log(form);
	};

	return (
		<div>
			<label htmlFor="name">
				Please enter a name <br />
				<input id="name" value={form.name} onChange={onChangeInput} />
			</label>
			<br />
			<label htmlFor="surname">
				Please enter a surname <br />
				<input
					id="surname"
					value={form.surname}
					onChange={onChangeInput}
				/>
			</label>
			<br />
			{form.name} {form.surname}
		</div>
	);
}
