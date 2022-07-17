import Container from "./components/Container";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import "./styles.css";

function App() {
	return (
		<ThemeProvider>
			<UserProvider>
				<Container />
			</UserProvider>
		</ThemeProvider>
	);
}

export default App;
