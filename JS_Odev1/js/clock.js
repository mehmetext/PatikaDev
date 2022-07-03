function showTime() {
	let now = new Date();

	let str = "";

	str += now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
	str += ":";
	str += now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
	str += ":";
	str += now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

	let day;

	switch (now.getDay()) {
		case 1:
			day = "Pazartesi";
			break;
		case 2:
			day = "Salı";
			break;
		case 3:
			day = "Çarşamba";
			break;
		case 4:
			day = "Perşembe";
			break;
		case 5:
			day = "Cuma";
			break;
		case 6:
			day = "Cumartesi";
			break;
		case 7:
			day = "Pazar";
			break;

		default:
			break;
	}

	str += " " + day;

	document.getElementById("myClock").innerHTML = str;
}

showTime();

let interval = setInterval(function () {
	showTime();
}, 1000);
