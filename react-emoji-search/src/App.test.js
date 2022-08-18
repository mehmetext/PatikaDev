import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
});

describe("Emoji Test Area", () => {
	test("Render If elements ok", () => {
		ReactDOM.render(<App />);
		const items = screen.getAllByTestId("row");
		expect(items.length).toEqual(42);
	});
});

test("Başlık kısmı başarılı bir şekilde render edildi mi", () => {
	ReactDOM.render(<App />);
	const headerTitle = screen.getByText(/emoji/i);
	expect(headerTitle).toBeInTheDocument();
});
