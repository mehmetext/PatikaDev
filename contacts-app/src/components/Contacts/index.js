import Form from "./Form";
import List from "./List";
import { useState } from "react";

export default function Contacts() {
	const [contacts, setContacts] = useState([]);

	const addContact = (ct) => {
		setContacts([...contacts, ct]);
	};

	return (
		<div className="box">
			<List contacts={contacts} />
			<Form addContact={addContact} />
		</div>
	);
}
