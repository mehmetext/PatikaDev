import { createContext, useContext, useReducer } from "react";
import todoReducer from "../reducer/todoReducer";

const Context = createContext();

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, {
		todo: "",
		todos: [],
	});

	const data = { ...state, dispatch };

	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useTodos = () => useContext(Context);

export default Provider;
