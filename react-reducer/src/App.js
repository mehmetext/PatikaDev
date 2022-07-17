import Home from "./pages/Home";
import { TodosProvider } from "./context";

function App() {
	return (
		<TodosProvider>
			<Home />
		</TodosProvider>
	);
}

export default App;
