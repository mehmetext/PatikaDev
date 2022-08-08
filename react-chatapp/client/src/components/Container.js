import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

import { init, subscribeChat, subscribeInıtialMessages } from "../socketApi";
import { useEffect } from "react";
import { useChat } from "../context/ChatContext";

export default function Container() {
	const { setMessages } = useChat();

	useEffect(() => {
		init();

		subscribeChat((message) => {
			setMessages((messages) => [...messages, { message }]);
		});

		subscribeInıtialMessages((messages) => {
			setMessages(messages);
		});
	}, []);

	return (
		<div>
			<ChatList />
			<ChatForm />
		</div>
	);
}
