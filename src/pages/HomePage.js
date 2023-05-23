import React from "react";
import { Link } from "react-router-dom";
import OtherPage from "./OtherPage";

const HomePage = () => {
	return (
		<div>
			<OtherPage />
			<div className="home-page">
				<div className="container">
					<div className="row">
						<div className="col-md-6 d-flex justify-content-center align-items-center">
							<ul className="list-unstyled">
								<Link
									to="/study"
									className="link-items"
									data-aos="zoom-in-up"
									data-aos-delay="100"
									data-aos-duration="1500"
									data-aos-deley="100"
								>
									<li className="list-item">Study</li>
								</Link>
								<Link
									to="/work"
									className="link-items"
									data-aos="zoom-in-up"
									data-aos-delay="150"
									data-aos-duration="1500"
								>
									<li className="list-item">Work</li>
								</Link>
								<Link
									to="/travel"
									className="link-items"
									data-aos="zoom-in-up"
									data-aos-delay="200"
									data-aos-duration="1500"
								>
									<li className="list-item">Travel</li>
								</Link>
								<Link
									to="/entertainment"
									className="link-items"
									data-aos="zoom-in-up"
									data-aos-delay="250"
									data-aos-duration="1500"
								>
									<li className="list-item">Entertainment</li>
								</Link>
								<Link
									to="/balance"
									className="link-items"
									data-aos="zoom-in-up"
									data-aos-delay="300"
									data-aos-duration="1500"
								>
									<li className="list-item">Balance</li>
								</Link>
							</ul>
						</div>
						<div className="col-md-6 d-flex justify-content-center align-items-center">
							<img
								data-aos="zoom-in-up"
								data-aos-delay="100"
								data-aos-duration="2500"
								data-aos-deley="400"
								className="img-style"
								src={require("../assets/globe1.png")}
								alt={"Add more descriptive alt"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
