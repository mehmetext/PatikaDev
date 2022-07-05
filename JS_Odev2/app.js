let taskEl = $("#task");
let listEl = $("#list");

function newElement() {
	let task = taskEl.val();

	if (task != "") {
		$(".toast.success").toast("show");
		listEl.append("<li>" + task + "<span class='close'>×</span></li>");
		taskEl.val("");
	} else {
		$(".toast.error").toast("show");
	}
}

$(document).on("click", ".close", function () {
	this.parentElement.remove();
});

$(document).on("click", "#list li", function () {
	$(this).toggleClass("checked");
});
