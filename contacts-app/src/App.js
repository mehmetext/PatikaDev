import Contacts from "./components/Contacts";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Contacts/Edit";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Contacts />} />
				<Route path="edit/:id" element={<Edit />} />
			</Routes>
		</div>
	);
}

export default App;
