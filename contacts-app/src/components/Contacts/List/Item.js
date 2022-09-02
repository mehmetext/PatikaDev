import { Link } from "react-router-dom";
import { removeContactDispatch } from "../../../store/dispatch";

export default function Item({ contact }) {
	const handleDelete = (e) => {
		e.preventDefault();

		if (window.confirm("Are you sure?")) {
			removeContactDispatch(contact.id);
		}
	};

	return (
		<li>
			<Link to={`/edit/${contact.id}`}>{contact.fullName} </Link>
			<span>{contact.phoneNumber}</span>
			<span onClick={handleDelete} className="delete">
				x
			</span>
		</li>
	);
}
