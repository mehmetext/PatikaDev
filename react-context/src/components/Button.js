import { useTheme } from "../context/ThemeContext";

export default function Button() {
	let { theme, setTheme } = useTheme();

	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			Button ({theme})
		</button>
	);
}
