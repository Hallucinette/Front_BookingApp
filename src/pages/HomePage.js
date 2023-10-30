import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className='homepage'>
			<h1>Bienvenue</h1>
			<div className='buttons'>
				<Link to='/signUpPage'>M'inscrire</Link>
				<Link to='/SignInPage'>Me connecter</Link>
			</div>
		</div>
	);
};

export default HomePage;
