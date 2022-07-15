import { useState } from "react";

const formInitialValues = { fullName: "", phoneNumber: "" };

export default function Form({ addContact }) {
	const [form, setForm] = useState(formInitialValues);

	const onChangeForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (form.fullName !== "" && form.phoneNumber !== "") {
			addContact(form);
			setForm(formInitialValues);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<div class="contactForm">
				<input
					name="fullName"
					value={form.fullName}
					placeholder="Full Name"
					onChange={onChangeForm}
				/>
				<input
					name="phoneNumber"
					value={form.phoneNumber}
					placeholder="Phone Number"
					onChange={onChangeForm}
				/>
			</div>
			<div>
				<button>Add</button>
			</div>
		</form>
	);
}
