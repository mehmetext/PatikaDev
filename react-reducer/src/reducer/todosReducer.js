import { nanoid } from "nanoid";

export default function todosReducer(state, action) {
	switch (action.type) {
		case "SET_TODO":
			localStorage.setItem("todo", action.value);
			return { ...state, todo: action.value };
		case "ADD_TODO":
			const addingTodo = { id: nanoid(), text: action.value };
			let addingTodoList = [addingTodo, ...state.todos];

			localStorage.setItem("todos", JSON.stringify(addingTodoList));
			localStorage.removeItem("todo");

			return {
				...state,
				todos: addingTodoList,
				todo: "",
			};
		case "DELETE_TODO":
			const deletingTodoList = state.todos.filter(
				(todo) => todo.id !== action.value
			);

			localStorage.setItem("todos", JSON.stringify(deletingTodoList));
			return {
				...state,
				todos: deletingTodoList,
			};
		default:
			return { ...state };
	}
}
