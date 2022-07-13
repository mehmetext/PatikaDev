import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<InputExample />
	</React.StrictMode>
);
