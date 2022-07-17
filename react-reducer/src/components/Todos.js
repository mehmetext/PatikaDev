import { useTodos } from "../context";

export default function Todos() {
	const { todos } = useTodos();
	return (
		<ul>
			{todos.map((item, i) => (
				<li key={i}>{item}</li>
			))}
		</ul>
	);
}
