import React from "react";
import { Link } from "react-router-dom";

const Study = () => {
	return (
		<div className="text-justify study-page">
			<div className="mar"></div>
			<div className="study-header text-center">
				Studying is an adventure of life
			</div>
			<div className="row gx-5 align-items-center">
				<div className="col-lg-7">
					<div className="mb-5 mb-lg-0 text-study">
						Studying is indeed an adventure within the larger
						journey of life. It is a process of exploration, growth,
						and acquiring knowledge that opens up new horizons and
						expands our understanding of the world. Just like any
						adventure, studying can be filled with excitement,
						challenges, and rewarding experiences.
						<br />
						When we embark on the adventure of studying, we enter a
						world of learning. We dive into various subjects,
						disciplines, and areas of interest that intrigue us. We
						engage with new ideas, concepts, and perspectives,
						broadening our intellectual horizons. Each book we read,
						each lecture we attend, and each discussion we
						participate in adds another layer to our understanding
						and shapes our worldview.
						<br />
						Along this adventure, we encounter challenges. Studying
						can require dedication, discipline, and perseverance.
						There may be difficult concepts to grasp, complex
						problems to solve, or rigorous examinations to overcome.
						However, it is through these challenges that we develop
						resilience, critical thinking skills, and
						problem-solving abilities. We learn to push ourselves,
						overcome obstacles, and grow both academically and
						personally.
						<br />
						Studying also presents opportunities for exploration and
						self-discovery. It allows us to discover our passions,
						interests, and strengths. We can choose to delve deeper
						into specific subjects, conduct research, or pursue
						creative projects. By following our intellectual
						curiosity and pursuing our academic interests, we can
						shape our educational journey according to our unique
						aspirations and goals.
						<br />
						So, embrace the adventure of studying. Embrace the
						challenges, embrace the joy of learning, and embrace the
						opportunities for personal and intellectual growth. Make
						the most of this adventure, and let it shape you into a
						lifelong learner and an informed, engaged citizen of the
						world.
					</div>
				</div>
				<div className="col-lg-5 d-flex justify-content-center">
					<img
						className="img-study"
						src={require("../assets/study1.jpg")}
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
	);
};

export default Study;
