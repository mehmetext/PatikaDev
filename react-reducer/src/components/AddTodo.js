import { useTodos } from "../context";

export default function AddTodo() {
	const { todo, dispatch } = useTodos();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", value: todo });
	};

	const onChange = (e) => {
		dispatch({ type: "SET_TODO", value: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={todo} autoFocus onChange={onChange} />
			<button disabled={!todo} type="submit">
				Ekle
			</button>
		</form>
	);
}
