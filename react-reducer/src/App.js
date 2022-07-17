import { useReducer } from "react";
import todoReducer from "./reducers/todoReducer";

function App() {
	const [state, dispatch] = useReducer(todoReducer, { todos: [], todo: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", value: state.todo });
	};

	const onChange = (e) => {
		dispatch({ type: "SET_TODO", value: e.target.value });
	};

	return (
		<>
			<h1>Todo App</h1>
			<form onSubmit={handleSubmit}>
				<input autoFocus value={state.todo} onChange={onChange} />
				<button type="submit" disabled={!state.todo}>
					Ekle
				</button>
			</form>
			<ul>
				{state.todos.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</>
	);
}

export default App;
