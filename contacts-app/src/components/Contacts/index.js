import Form from "./Form";
import List from "./List";
import { useState } from "react";

import styles from "./style.module.css";

export default function Contacts() {
	const [contacts, setContacts] = useState([]);

	const addContact = (ct) => {
		setContacts([...contacts, ct]);
	};

	return (
		<div className={styles.box}>
			<List contacts={contacts} />
			<Form addContact={addContact} />
		</div>
	);
}
