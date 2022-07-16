import { getInvoices } from "../data";
import { NavLink, Outlet } from "react-router-dom";

export default function Invoices() {
	let invoices = getInvoices();
	return (
		<div style={{ display: "flex" }}>
			<nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
				{invoices.map((item) => (
					<NavLink
						style={({ isActive }) => {
							return {
								display: "block",
								margin: "1rem 0",
								color: isActive ? "red" : "",
							};
						}}
						to={`/invoices/${item.number}`}
						key={item.number}
					>
						{item.name}
					</NavLink>
				))}
			</nav>
			<Outlet />
		</div>
	);
}
