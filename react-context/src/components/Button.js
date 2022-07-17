import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Button() {
	let { theme, setTheme } = useContext(ThemeContext);

	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			Button ({theme})
		</button>
	);
}
