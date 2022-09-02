import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { contactsSelectors } from "../../store/contacts";
import { updateContactDispatch } from "../../store/dispatch";

export default function Edit() {
	const { id } = useParams();
	const navigate = useNavigate();

	const contact = useSelector((state) =>
		contactsSelectors.selectById(state, id)
	);

	const [form, setForm] = useState(contact);

	if (!contact) return <Navigate to="/" />;

	const onChangeForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (form.fullName !== "" && form.phoneNumber !== "") {
			updateContactDispatch({ id: id, changes: form });
			navigate(-1);
		}
	};

	return (
		<div className="box">
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
					<button>Save</button>
				</div>
			</form>
		</div>
	);
}
