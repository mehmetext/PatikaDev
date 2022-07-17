function reducer(state, action) {
	switch (action.type) {
		case "SET_TODO":
			return { ...state, todo: action.value };
		case "ADD_TODO":
			return {
				...state,
				todos: [action.value, ...state.todos],
				todo: "",
			};
		default:
			break;
	}
}

export default reducer;
