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
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
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
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
}

export default App;
