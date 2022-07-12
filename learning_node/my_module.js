const hello = (name) => {
	// console.log("hello " + name);
	console.log(`Hello, ${name}!`);
};

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

export const text = "Mehmet";

export const user = {
	id: 1,
	name: "Mehmet",
};

export const cities = ["Aksaray", "Konya", "Ankara"];

export { topla, cikar };

export default hello;
