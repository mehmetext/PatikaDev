import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
	const [messages, setMessages] = useState([]);

	const values = {
		messages,
		setMessages,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useChat = () => useContext(Context);

export default Provider;
