import Container from "./components/Container";
import { default as ChatProvider } from "./context/ChatContext";

export default function App() {
	return (
		<ChatProvider>
			<Container />
		</ChatProvider>
	);
}
