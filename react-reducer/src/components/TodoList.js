import { useTodos } from "../context";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const { todos } = useTodos();

	return (
		<ul>
			{todos.map((item) => (
				<TodoItem key={item.id} todo={item} />
			))}
		</ul>
	);
}
