import { useTheme } from "../context/ThemeContext";

export default function Header() {
	const { theme } = useTheme();
	return (
		<>
			<h2>Header: {theme}</h2>
			<hr />
		</>
	);
}
