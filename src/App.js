import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SingInPage";
import SignUpPage from "./pages/SignUpPage";

import "./App.css";

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/SignInPage' element={<SignInPage />} />
					<Route path='/SignUpPage' element={<SignUpPage />} />
					<Route path='/AboutPage' element={<AboutPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
