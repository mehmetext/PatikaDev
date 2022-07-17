import { useState } from "react";
import { useTodos } from "../context";

export default function TodoItem({ todo }) {
	const [editing, setEditing] = useState(false);
	const [newTodo, setNewTodo] = useState(todo.text);

	const { dispatch } = useTodos();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch({ type: "DELETE_TODO", value: todo.id });
	};

	const handleCompletedChanged = () => {
		dispatch({ type: "TOGGLE_COMPLETED_TODO", value: todo.id });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type: "UPDATE_TODO",
			value: { id: todo.id, todo: newTodo },
		});

		setEditing(false);
	};

	return (
		<li style={{ padding: 10, listStyle: "none" }}>
			<input
				type="checkbox"
				onChange={handleCompletedChanged}
				checked={todo.completed}
			/>
			<span style={{ width: 200, display: "inline-block" }}>
				{!editing && (
					<span
						onClick={() => setEditing(true)}
						style={{
							textDecoration: todo.completed
								? "line-through"
								: "",
							color: todo.completed ? "grey" : "",
							marginRight: 10,
							width: 200,
							display: "inline-block",
						}}
					>
						{todo.text}
					</span>
				)}
				{editing && (
					<form onSubmit={handleSubmit}>
						<input
							autoFocus
							defaultValue={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
						/>
					</form>
				)}
			</span>
			(
			<a onClick={handleDelete} href="/deleteTodo">
				Sil
			</a>
			)
		</li>
	);
}
