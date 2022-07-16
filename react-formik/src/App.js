import { Formik, Form, Field } from "formik";

function App() {
	return (
		<div>
			<h1>Sign Up</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					gender: "",
					hobbies: [],
					country: "",
				}}
				onSubmit={(values) => {
					console.log(JSON.stringify(values, null, 2));
				}}
			>
				{({ values }) => (
					<Form>
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" placeholder="Jane" />

						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" placeholder="Doe" />

						<label htmlFor="email">Email</label>
						<Field
							name="email"
							placeholder="jane@acme.com"
							type="email"
						/>

						<br />
						<br />
						<label htmlFor="male">Erkek</label>
						<Field
							id="male"
							value="male"
							name="gender"
							type="radio"
						/>
						<br />
						<label htmlFor="female">Kadın</label>
						<Field
							id="female"
							value="female"
							name="gender"
							type="radio"
						/>
						<br />
						<br />

						<label>
							<Field
								id="coding"
								value="coding"
								name="hobbies"
								type="checkbox"
							/>
							Deneme
						</label>
						<label>
							<Field
								id="reading"
								value="reading"
								name="hobbies"
								type="checkbox"
							/>
							Reading
						</label>
						<label>
							<Field
								id="sleeping"
								value="sleeping"
								name="hobbies"
								type="checkbox"
							/>
							Sleeping
						</label>

						<br />
						<br />

						<Field as="select" name="country">
							<option value="">Select</option>
							<option value="tr">Turkiye</option>
							<option value="de">Germany</option>
							<option value="en">England</option>
						</Field>

						<br />
						<br />

						<button type="submit">Submit</button>

						<br />
						<br />

						<pre>{JSON.stringify(values, null, 2)}</pre>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default App;
