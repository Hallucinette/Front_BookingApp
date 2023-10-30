import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignInForm2 = () => {

	// const [jwt, setJwt] = useState(localStorage.getItem("jwt") || "");

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required("L'email est requis")
				.email("Adresse email non valide"),
			password: Yup.string()
				.required("Mot de passe requis")
				.min(4, "Le mot de passe doit comporter au moins 4 caractères")
				.max(15, "C'est trop long !"),
			}),
		onSubmit: (values) => {
			console.log("Formulaire ok");
			console.log(values);
			// handle submit
			handleAuthentication(values);
		},
	});

	const handleAuthentication = async (values) => {
		try {
		  const response = await fetch("http://localhost:3000/auth/signin", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			//   "Authorization": jwt,
			},
			body: JSON.stringify(values),
		  });
		  if (response.ok) {
			const { token } = await response.json();
			localStorage.setItem("jwt", token);
			console.log('Authantification réussie. Token stocké dans localStorage:', token)
		  } else {
			console.error("Authentication failed");
		  }
		} catch (error) {
			console.log("Erreur lors de l'authantification:", error);
		}
	  };

	return (
		<div>
			<h3>SignInForm2</h3>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type='email'
						name='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div style={styles.red}>{formik.errors.email}</div>
					): null }
				</div>
				<div>
					<label>Mot de passe</label>
					<input
						type='password'
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
						{formik.touched.password && formik.errors.password ? (
						<div style={styles.red}>{formik.errors.password}</div>
					): null }
				</div>
				<button type='submit'>Me connecter</button>
			</form>
		</div>
	);
};

const styles = {
	red :{
		color: "red",
	},
};

export default SignInForm2;