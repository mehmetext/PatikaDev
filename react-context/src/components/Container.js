import Button from "./Button";
import Header from "./Header";

import { useTheme } from "../context/ThemeContext";
import Profile from "./Profile";

export default function Container() {
	const { theme } = useTheme();

	return (
		<div className={`App ${theme === "dark" ? "dark" : ""}`}>
			<Header />
			<Button />
			<hr />
			<Profile />
		</div>
	);
}
