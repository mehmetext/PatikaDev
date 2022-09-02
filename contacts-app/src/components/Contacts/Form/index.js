import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { addContactDispatch } from "../../../store/dispatch";

const formInitialValues = { fullName: "", phoneNumber: "" };

export default function Form() {
	const [form, setForm] = useState(formInitialValues);

	const onChangeForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (form.fullName !== "" && form.phoneNumber !== "") {
			addContactDispatch({ id: nanoid(), ...form });
			setForm(formInitialValues);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="contactForm">
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
