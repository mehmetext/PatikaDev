import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { nanoid } from "nanoid";
import "./style.css";

import { useEffect, useState } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	const [filtered, setFiltered] = useState(todos);
	const [showingType, setShowingType] = useState("all");

	useEffect(() => {
		switch (showingType) {
			case "all":
				setFiltered(todos);
				break;
			case "actives":
				setFiltered(todos.filter((item) => !item.completed));
				break;
			default:
				setFiltered(todos.filter((item) => item.completed));
				break;
		}
	}, [todos, showingType]);

	const addTodo = (text) => {
		setTodos([{ id: nanoid(), text: text, completed: false }, ...todos]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((item) => item.id !== id));
	};

	const toggleCheckTodo = (id, checked) => {
		setTodos(
			todos.map((item) => {
				if (item.id === id) {
					item.completed = checked;
				}
				return item;
			})
		);
	};

	const activeCount = todos.filter((item) => !item.completed).length;
	const completedCount = todos.filter((item) => item.completed).length;

	const clearCompleteds = () => {
		setTodos(todos.filter((item) => !item.completed));
	};

	return (
		<section className="todoapp">
			<Header addTodo={addTodo} />
			<Main
				deleteTodo={deleteTodo}
				todos={filtered}
				toggleCheckTodo={toggleCheckTodo}
			/>
			<Footer
				activeCount={activeCount}
				completedCount={completedCount}
				showingType={showingType}
				setShowingType={setShowingType}
				clearCompleteds={clearCompleteds}
			/>
		</section>
	);
}

export default App;
