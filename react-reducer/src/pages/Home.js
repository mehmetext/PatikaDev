import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
import { useTodos } from "../context/TodosContext";

export default function Home() {
	const { deneme } = useTodos();

	return (
		<>
			<h1>Todo App {deneme}</h1>
			<AddTodo />
			<Todos />
		</>
	);
}
