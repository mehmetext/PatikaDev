import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user") ?? false)
	);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	const values = { user, setUser };
	return (
		<UserContext.Provider value={values}>{children}</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
