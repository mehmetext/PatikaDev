import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Header() {
	const { theme } = useContext(ThemeContext);
	return (
		<>
			<h2>Header: {theme}</h2>
			<hr />
		</>
	);
}
