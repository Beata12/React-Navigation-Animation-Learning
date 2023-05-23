import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./pages/Navigation";
import Study from "./pages/Study";
import Travel from "./pages/Travel";
import Work from "./pages/Work";
import Balance from "./pages/Balance";
import Entertainment from "./pages/Entertainment";
import { useEffect } from "react";
import AOS from "aos";

const App = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<BrowserRouter>
			<nav>
				<Navigation />
			</nav>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/study" element={<Study />} />
					<Route path="/work" element={<Work />} />
					<Route path="/travel" element={<Travel />} />
					<Route path="/entertainment" element={<Entertainment />} />
					<Route path="/balance" element={<Balance />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
