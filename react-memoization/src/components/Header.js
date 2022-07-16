import React from "react";

function Header({ data }) {
	console.log("Header render edildi");
	return (
		<>
			<div>
				<h1>HEADER</h1>
			</div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<hr />
		</>
	);
}

export default React.memo(Header);
