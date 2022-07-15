import { useState } from "react";

export default function List({ contacts }) {
	const [filterText, setFilterText] = useState("");

	const filtered = contacts.filter((item) => {
		return Object.keys(item).some((key) => {
			return item[key]
				.toString()
				.toLowerCase()
				.includes(filterText.toLocaleLowerCase());
		});
	});

	return (
		<div>
			<div>
				<input
					onChange={(e) => setFilterText(e.target.value)}
					value={filterText}
					placeholder="Filter"
				/>
			</div>
			{filtered.length > 0 ? (
				<ul>
					{filtered.map((contact) => (
						<li>
							{contact.fullName}{" "}
							<span>{contact.phoneNumber}</span>
						</li>
					))}
				</ul>
			) : (
				<div class="noone">Kişi yok.</div>
			)}
		</div>
	);
}
