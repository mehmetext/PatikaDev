const users = [
	{ name: "Mehmet", age: 21 },
	{ name: "Ahmet", age: 19 },
	{ name: "Murat", age: 20 },
];

console.log(users);

users.push({ name: "Ayşe", age: 21 });

console.log(users);

users.map((item) => {
	console.log(item.name);
});

const findIt = users.find((item) => item.name == "Mehmet");
console.log(findIt);

const filtered = users.filter((item) => item.age > 20);
console.log(filtered);

//some => her itemi kontrol eder ve herhangi bir itemde yapılan kontrol true olursa değer true döner
const exists20Years = users.some((item) => item.age == 20);
console.log(exists20Years);

//every => her itemi kontrol eder ve her itemde yapılan kontrol true olursa değer true döner
const everyone20Years = users.every((item) => item.age == 20);
console.log(everyone20Years);

const fruits = ["Elma", "Armut", "Muz"];

//includes => bu liste o iteme sahip mi?
const isIncluded = fruits.includes("Muz");
console.log(isIncluded);
