function reducer(state, action) {
	switch (action.type) {
		case "SET_TODO":
			localStorage.setItem("todo", action.value);
			return { ...state, todo: action.value };
		case "ADD_TODO":
			const todos = [action.value, ...state.todos];
			localStorage.setItem("todos", JSON.stringify(todos));
			localStorage.removeItem("todo");

			return {
				...state,
				todos: todos,
				todo: "",
			};
		default:
			break;
	}
}

export default reducer;
