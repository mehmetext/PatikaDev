import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
	if (!isLoggedIn) return <div>Giriş yapmadınız!</div>;

	return (
		<>
			<h1>
				{isLoggedIn ? (
					<>
						{name} {surname}{" "}
						{age && <span style={{ color: "red" }}>({age})</span>}
					</>
				) : (
					<>Giriş Yapmadınız</>
				)}
			</h1>
			<div>
				{address.title} {address.zip}
			</div>
			<br />
			{friends && (
				<div className="friends">
					{friends.map((friend) => (
						<div key={friend.id}>
							{friend.id} - {friend.name}
						</div>
					))}
				</div>
			)}
		</>
	);
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	friends: PropTypes.array.isRequired,
	address: PropTypes.shape({
		title: PropTypes.string,
		zip: PropTypes.number,
	}),
};

User.defaultProps = {
	isLoggedIn: false,
};

export default User;
