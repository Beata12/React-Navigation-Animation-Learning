import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
	return (
		<div>
			<div className="text-justify study-page">
				<div className="mar"></div>
				<div className="study-header text-center">
					Working is an adventure of life
				</div>
				<div className="row gx-5 align-items-center">
					<div className="col-lg-7">
						<div className="mb-5 mb-lg-0 text-study">
							Work life can be viewed as an adventure within the
							broader journey of life. It is a significant aspect
							of our existence, where we dedicate a considerable
							amount of time and effort. Just like any adventure,
							work life can be filled with excitement, challenges,
							and opportunities for growth. When we approach work
							as an adventure, we adopt a mindset that allows us
							to embrace the journey and make the most of our
							professional experiences.
							<br />
							One of the exciting aspects of work life is the
							opportunity for growth and learning. Each job or
							career path we pursue presents us with new
							challenges, responsibilities, and chances to acquire
							new skills and knowledge.
							<br />
							Furthermore, work life is an adventure that often
							involves collaborations and interactions with a
							diverse range of people. We have the opportunity to
							work alongside colleagues, clients, and mentors who
							bring unique perspectives and expertise. Building
							relationships, collaborating on projects, and
							learning from others can enrich our work experience
							and broaden our horizons.
							<br />
							Finally, approaching work life as an adventure means
							finding joy and fulfillment in the process. It
							involves seeking out tasks and projects that align
							with our passions and values. When we find meaning
							and purpose in our work, it becomes more than just a
							means of earning, it becomes a source of personal
							satisfaction and fulfillment.
							<br />
							So, embrace work life as an adventure. Embrace the
							opportunities for growth, the challenges to
							overcome, and the chance to make a positive impact.
							Approach each day with a sense of curiosity,
							enthusiasm, and a willingness to embrace the
							unknown. With this mindset, work can become an
							exciting and fulfilling part of the grand adventure
							of life.
						</div>
					</div>
					<div className="col-lg-5 d-flex justify-content-center">
						<img
							className="img-study"
							src={require("../assets/work.jpg")}
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

export default Work;
