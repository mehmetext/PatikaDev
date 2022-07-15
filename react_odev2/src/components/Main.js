import Todo from "./Todo";

export default function Main({ todos, deleteTodo, toggleCheckTodo }) {
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">Mark all as complete</label>

			<ul className="todo-list">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						toggleCheckTodo={toggleCheckTodo}
					/>
				))}
			</ul>
		</section>
	);
}
