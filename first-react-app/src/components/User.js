function User({ name, surname, age, isLoggedIn, friends }) {
	return (
		<>
			<h1>
				{isLoggedIn ? (
					<>
						{name} {surname} ({age})
					</>
				) : (
					<>Giriş Yapmadınız</>
				)}
			</h1>
			<div className="friends">
				{friends.map((friend) => (
					<div key={friend.id}>
						{friend.id} - {friend.name}
					</div>
				))}
			</div>
		</>
	);
}

export default User;
