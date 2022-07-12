import getData from "./get_data.js";

console.log("== İŞLEM BAŞLADI ==");
const data = await getData(1);
console.log(data);
console.log("== İŞLEM BİTTİ ==");
