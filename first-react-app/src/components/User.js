function User({ name, surname, age, isLoggedIn }) {
	return (
		<div>
			<h1>
				{isLoggedIn ? (
					<>
						{name} {surname} ({age})
					</>
				) : (
					<>Giriş Yapmadınız</>
				)}
			</h1>
		</div>
	);
}

export default User;
