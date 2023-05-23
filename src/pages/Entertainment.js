import React from "react";
import { Link } from "react-router-dom";

const Entertainment = () => {
	return (
		<div>
			<div className="text-justify study-page">
				<div className="mar"></div>
				<div className="study-header text-center">
					Entertainment is an adventure of life
				</div>
				<div className="row gx-5 align-items-center">
					<div className="col-lg-7">
						<div className="mb-5 mb-lg-0 text-study">
							Entertainment life can indeed be seen as an
							adventure within the broader journey of life. It
							offers a variety of experiences, emotions, and
							opportunities for exploration and enjoyment.
							Entertainment encompasses various forms such as
							movies, television shows, music, theater, sports,
							gaming, and more.
							<br />
							Engaging in entertainment activities can be like
							embarking on an adventure. Whether you're watching a
							captivating film, attending a live performance, or
							immersing yourself in a video game, you are
							transported to different worlds, stories, and
							experiences. These experiences can evoke a range of
							emotions, from excitement and joy to suspense and
							awe.
							<br />
							Participating in entertainment also creates
							opportunities for connection and shared experiences.
							Additionally, entertainment has the power to
							educate, inform, and raise awareness about important
							social and cultural issues.
							<br />
							In this adventure called entertainment life, you
							have the opportunity to explore diverse forms of
							creativity, discover new talents, and engage with
							the ever-evolving landscape of entertainment. It is
							a journey that brings joy, inspiration, and moments
							of escape from the realities of everyday life.
							<br />
							So, embrace entertainment as an adventure within the
							grand tapestry of life. Immerse yourself in the
							magic of storytelling, connect with others through
							shared experiences, and let the world of
							entertainment ignite your imagination, broaden your
							perspectives, and add color and excitement to your
							life's journey.
							<br /> If you want to get back to home page <br />
						</div>
					</div>
					<div className="col-lg-5 d-flex justify-content-center">
						<img
							className="img-study"
							src={require("../assets/entertainment.jpg")}
							alt={"Add more descriptive alt"}
						/>
					</div>
				</div>
				<div className="link-study text-center">
					<p>If you want to get back to home page</p>
					<Link to="/" className="link-items">
						Click me
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Entertainment;
