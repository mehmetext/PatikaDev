import { useState } from "react";
import { useSelector } from "react-redux";
import { contactsSelectors } from "../../../store/contacts";
import Item from "./Item";

export default function List() {
	const [filterText, setFilterText] = useState("");
	const contacts = useSelector(contactsSelectors.selectAll);

	return (
		<div>
			<div>
				<input
					onChange={(e) => setFilterText(e.target.value)}
					value={filterText}
					placeholder="Filter"
				/>
			</div>
			{contacts.length > 0 ? (
				<ul>
					{contacts.map((contact) => (
						<Item key={contact.id} contact={contact} />
					))}
				</ul>
			) : (
				<div className="noone">Kişi yok.</div>
			)}
		</div>
	);
}
