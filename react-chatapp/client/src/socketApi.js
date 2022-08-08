import io from "socket.io-client";

let socket;

export const init = () => {
	console.log("connecting...");
	socket = io("http://localhost:3001", {
		transports: ["websocket"],
	});

	socket.on("connect", () => console.log("Connected!"));
};

export const sendMessage = (message) => {
	if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb) => {
	if (socket) {
		socket.on("receive-message", (message) => {
			console.log("yeni mesaj var", message);
			cb(message);
		});
	}
};

export const subscribeInıtialMessages = (cb) => {
	socket.on("message-list", (messages) => {
		console.log("Initial: ", messages);
		cb(messages);
	});
};
