import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
	return (
		<div>
			<h1>
				<Link to="/">Bookkeeper</Link>
			</h1>
			<nav
				style={{
					borderBottom: "solid 1px",
					paddingBottom: "1rem",
				}}
			>
				<NavLink
					style={({ isActive }) => {
						return {
							color: isActive ? "red" : "",
						};
					}}
					to="/invoices"
				>
					Invoices
				</NavLink>{" "}
				|{" "}
				<NavLink
					style={({ isActive }) => {
						return {
							color: isActive ? "red" : "",
						};
					}}
					to="/expenses"
				>
					Expenses
				</NavLink>
			</nav>
			<Outlet />
		</div>
	);
}

export default App;
