import React from "react";

function Header() {
	console.log("Header render edildi");
	return (
		<>
			<div>
				<h1>HEADER</h1>
			</div>
			<hr />
		</>
	);
}

export default React.memo(Header);
