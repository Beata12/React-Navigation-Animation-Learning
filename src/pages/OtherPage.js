import React, { useState } from "react";
import { Collapse } from "react-collapse";
import Decisions from "./Decisions";
import Opportunities from "./Opportunities";

function OtherPage() {
	const [elemToDisplay1, setElemToDisplay] = useState(1);

	const handleElementToDisplay = (displayNr) => {
		if (elemToDisplay1 === displayNr);
		else setElemToDisplay(displayNr);
	};

	const [elemToDisplay2, setElemToDisplay2] = useState(0);
	const handleElementToDisplay2 = (displayNr2) => {
		setElemToDisplay2(elemToDisplay2 === displayNr2 ? 0 : displayNr2);
	};
	return (
		<div className="life-page">
			<div className="header-mrg"></div>
			<p className="header-text text-center">
				Life is a beautiful adventure
			</p>
			<p className="text2 text-center ">
				Life is often described as a beautiful adventure. It offers us a
				vast array of experiences, emotions, and opportunities for
				growth.
				<br /> Just like an adventure, life can be unpredictable, filled
				with twists and turns, challenges, and moments of joy and
				wonder.
			</p>
			<div
				className="introduction-topic container"
				data-aos="zoom-in-up"
				data-aos-delay="200"
				data-aos-duration="1500"
			>
				<div className="container">
					<div className="d-flex justify-content-center">
						<button
							className="btn-color"
							onClick={() => handleElementToDisplay2(1)}
						>
							{elemToDisplay2 ? "LESS" : "CLICK ME"}
						</button>
					</div>
				</div>
				<Collapse isOpened={elemToDisplay2 === 1}>
					<div className="container ">
						<div className="simple-border">
							<div className="d-flex justify-content-around div-headers">
								<div
									className="div1 text-center "
									onClick={() => handleElementToDisplay(1)}
								>
									You have oportunities!
								</div>
								<div
									className="div2 text-center"
									onClick={() => handleElementToDisplay(2)}
								>
									You make decisions!
								</div>
							</div>
							<Collapse isOpened={elemToDisplay1 === 1}>
								<div className="">
									<div className="desktop-about">
										<div className="about container px-5">
											<div className="row gx-5 align-items-center">
												<div className="col-lg-7">
													<div className="mb-5 mb-lg-0 ">
														<Opportunities />
													</div>
												</div>
												<div className="col-lg-5 d-flex justify-content-center">
													<img
														className="img-box"
														src={require("../assets/Opportunity.jpg")}
														alt={
															"Add more descriptive alt"
														}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Collapse>
							<Collapse isOpened={elemToDisplay1 === 2}>
								<div id="aboutKla" className="panel">
									<div className="container">
										<div className="row gx-5 align-items-center">
											<div className="col-lg-7 text-margin-top">
												<div className="mb-5 mb-lg-0">
													<Decisions />
												</div>
											</div>
											<div className="col-lg-5 d-flex justify-content-center">
												<img
													className="img-box"
													src={require("../assets/decision.jpg")}
													alt={
														"Add more descriptive alt"
													}
												/>
											</div>
										</div>
									</div>
								</div>
							</Collapse>
						</div>
					</div>
				</Collapse>
			</div>
			<p className="text2 text-center">
				Life is indeed a beautiful adventure. It is a journey full of
				wonder, growth, and opportunities for self-discovery. <br />
				Embrace it with open arms, cherish every moment, and make the
				most of the adventure that lies ahead.
			</p>
		</div>
	);
}

export default OtherPage;
