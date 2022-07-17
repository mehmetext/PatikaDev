import { useTodos } from "../context";

export default function TodoList() {
	const { todos, dispatch } = useTodos();

	const handleDelete = (e, id) => {
		e.preventDefault();
		dispatch({ type: "DELETE_TODO", value: id });
	};

	return (
		<ul>
			{todos.map((item) => (
				<li key={item.id}>
					{item.text}{" "}
					<a
						onClick={(e) => handleDelete(e, item.id)}
						href="/deleteTodo"
					>
						Sil
					</a>
				</li>
			))}
		</ul>
	);
}
