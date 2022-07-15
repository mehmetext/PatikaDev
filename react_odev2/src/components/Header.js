import { useState } from "react";

export default function Header({ addTodo }) {
	const [todo, setTodo] = useState("");

	return (
		<header className="header">
			<h1>todos</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (todo !== "") {
						addTodo(todo);
						setTodo("");
					}
				}}
			>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					onChange={(e) => setTodo(e.target.value)}
					value={todo}
					autoFocus
				/>
			</form>
		</header>
	);
}
