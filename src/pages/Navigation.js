import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<nav className="navbar navbar-expand-lg bcg-nav">
			<div className="container">
				<a className="ms-4" href="#pagetop">
					<Link to="/	">
						<img
							src={require("../assets/logo.png")}
							className={"logo-size"}
							alt={"Add more descriptive alt"}
						/>
					</Link>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon menu-mbl"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<div className="">
								<a
									className="social-icon col-lg-4 ig  "
									href="https://www.instagram.com/"
									target="blank"
								>
									<i className="fa fa-instagram instagram"></i>
								</a>
							</div>
						</li>
						<li className="nav-item">
							<div className="">
								<a
									className="social-icon col-lg-4 twit "
									href="https://twitter.com/"
									target="blank"
								>
									<i className="fa fa-twitter twitter"></i>
								</a>
							</div>
						</li>
						<li className="nav-item">
							<div className="">
								<a
									className="social-icon col-lg-4 fb"
									href="https://www.facebook.com/"
									target="blank"
								>
									<i className="fa fa-facebook facebook"></i>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default HomePage;
