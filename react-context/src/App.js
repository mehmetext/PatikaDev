import Container from "./components/Container";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles.css";

function App() {
	return (
		<ThemeProvider>
			<Container />
		</ThemeProvider>
	);
}

export default App;
