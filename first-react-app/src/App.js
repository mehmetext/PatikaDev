import "./App.css";
import Header from "./components/Header";

const name = "Mehmet";
const surname = "Konukçu";
const isLoggedIn = true;

function App() {
	return (
		<>
			<h1>
				{isLoggedIn && (
					<>
						<Header />
						{name} {surname}
					</>
				)}
			</h1>

			{!isLoggedIn && (
				<>
					Kullanıcı Yok <br />
				</>
			)}

			{isLoggedIn ? "Çıkış yap" : "Giriş Yap"}
		</>
	);
}

export default App;
