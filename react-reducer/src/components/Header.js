import { useTodos } from "../context";

export default function Header() {
	const { todos } = useTodos();

	return <h1>Todo App ({todos.length})</h1>;
}
