import { IntlProvider, FormattedMessage } from "react-intl";

import { useEffect, useState } from "react";

const messages = {
	"tr-TR": {
		title: "Merhaba Dünya",
		description: "{count} yeni mesajınız var",
	},
	"en-US": {
		title: "Hello World",
		description: "You have {count} new messages",
	},
};

function App() {
	const defaultLocale = navigator.language;
	const [locale, setLocale] = useState(
		localStorage.getItem("locale") ?? defaultLocale
	);

	const handleClickLocale = (locale) => {
		setLocale(locale);
	};

	useEffect(() => {
		localStorage.setItem("locale", locale);
	}, [locale]);

	return (
		<IntlProvider locale={locale} messages={messages[locale]}>
			<FormattedMessage id="title" />

			<p>
				<FormattedMessage id="description" values={{ count: 5 }} />
			</p>

			<button onClick={() => handleClickLocale("tr-TR")}>TR</button>
			<button onClick={() => handleClickLocale("en-US")}>EN</button>
		</IntlProvider>
	);
}

export default App;
