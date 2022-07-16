import { Formik, Form, Field } from "formik";
import signupSchema from "../validations/signup";
import "./style.css";

export default function Signup() {
	return (
		<div>
			<h1>Sign Up</h1>
			<Formik
				initialValues={{
					email: "",
					password: "",
					passwordConfirm: "",
				}}
				onSubmit={(values) => {
					console.log(JSON.stringify(values, null, 2));
				}}
				validationSchema={signupSchema}
			>
				{({ values, errors, touched }) => (
					<Form>
						<label htmlFor="email">Email</label>
						<Field
							id="email"
							name="email"
							placeholder="jane@acme.com"
							type="email"
						/>
						{errors.email && touched.email && (
							<div className="error">{errors.email}</div>
						)}
						<br />
						<br />
						<label htmlFor="password">Password</label>
						<Field
							id="password"
							name="password"
							placeholder="*****"
							type="password"
						/>
						{errors.password && touched.password && (
							<div className="error">{errors.password}</div>
						)}
						<br />
						<br />
						<label htmlFor="passwordConfirm">Password</label>
						<Field
							id="passwordConfirm"
							name="passwordConfirm"
							placeholder="*****"
							type="password"
						/>
						{errors.passwordConfirm && touched.passwordConfirm && (
							<div className="error">
								{errors.passwordConfirm}
							</div>
						)}
						<br />
						<br />
						<button type="submit">Submit</button>
						<pre>{JSON.stringify(values, null, 2)}</pre>
					</Form>
				)}
			</Formik>
		</div>
	);
}
