import * as yup from "yup";

let signupSchema = yup.object().shape({
	email: yup
		.string()
		.email("Lütfen geçerli e-mail girin.")
		.required("Bu alan zorunludur."),
	password: yup
		.string()
		.min(5, "Şifre en az 5 karakterli olmalıdır.")
		.required("Bu alan zorunludur"),
	passwordConfirm: yup
		.string()
		.min(5, "Şifre en az 5 karakterli olmalıdır.")
		.oneOf([yup.ref("password")], "Şifrelet eşleşmiyor.")
		.required("Bu alan zorunludur."),
});

export default signupSchema;
