import Button from "./Button";
import Header from "./Header";

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Container() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`App ${theme === "dark" ? "dark" : ""}`}>
			<Header />
			<Button />
		</div>
	);
}
