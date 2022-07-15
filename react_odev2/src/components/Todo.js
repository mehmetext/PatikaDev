export default function Todo({ todo, deleteTodo, toggleCheckTodo }) {
	const onChangeCheckbox = (e) => {
		toggleCheckTodo(todo.id, e.target.checked);
	};

	return (
		<li className={todo.completed ? "completed" : ""}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					defaultChecked={todo.completed}
					onChange={onChangeCheckbox}
				/>
				<label>{todo.text}</label>
				<button
					className="destroy"
					onClick={() => deleteTodo(todo.id)}
				></button>
			</div>
		</li>
	);
}
