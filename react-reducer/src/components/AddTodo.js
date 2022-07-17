import { useTodos } from "../context";

export default function AddTodo() {
	const { todo, dispatch } = useTodos();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (todo.trim() !== "") {
			dispatch({ type: "ADD_TODO", value: todo.trim() });
		}
	};

	const handleChange = (e) => {
		dispatch({ type: "SET_TODO", value: e.target.value });
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					value={todo}
					onChange={handleChange}
					placeholder="Todo..."
				/>
				<button disabled={!todo}>Ekle</button>
			</form>
		</>
	);
}
