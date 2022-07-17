import { useTodos } from "../context";

export default function TodoItem({ todo }) {
	const { dispatch } = useTodos();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch({ type: "DELETE_TODO", value: todo.id });
	};

	const handleToggleCompleted = () => {
		dispatch({ type: "TOGGLE_COMPLETED_TODO", value: todo.id });
	};

	return (
		<li style={{ padding: 10, userSelect: "none" }}>
			<span
				onClick={handleToggleCompleted}
				style={{
					textDecoration: todo.completed ? "line-through" : "",
					color: todo.completed ? "grey" : "",
					cursor: "pointer",
					marginRight: 10,
				}}
			>
				{todo.text}
			</span>{" "}
			(
			<a onClick={handleDelete} href="/deleteTodo">
				Sil
			</a>
			)
		</li>
	);
}
