import React from "react";
import { Link } from "react-router-dom";

const Balance = () => {
	return (
		<div>
			<div>
				<div className="text-justify study-page">
					<div className="mar"></div>
					<div className="study-header text-center">
						Entertainment is an adventure of life
					</div>
					<div className="row gx-5 align-items-center">
						<div className="col-lg-7">
							<div className="mb-5 mb-lg-0 text-study">
								Achieving a balanced life can be seen as an
								adventure within the larger journey of life. It
								involves navigating the various aspects of our
								lives and finding harmony and fulfillment in
								each of them. Balancing life is an ongoing
								adventure that requires self-awareness,
								prioritization, and conscious decision-making.
								It involves recognizing and addressing the
								different areas of our lives, such as work,
								relationships, personal growth, health, leisure,
								and more.
								<br />
								Just like any adventure, finding balance can be
								both exciting and challenging. It requires
								exploration and experimentation to discover what
								works best for us individually. It may involve
								trying new strategies, adjusting priorities, and
								making conscious choices to align our actions
								with our values and goals.
								<br />
								In the adventure of balance, there may be
								obstacles to overcome. We might face time
								constraints, conflicting priorities, or societal
								pressures that make achieving balance
								challenging. However, it is through these
								challenges that we learn valuable lessons about
								ourselves, our limits, and what truly matters to
								us.
								<br />
								Moreover, finding balance requires adaptability
								and flexibility. Just as an adventure unfolds
								with twists and turns, our lives can be
								unpredictable. Circumstances change, and our
								priorities and needs evolve over time. Embracing
								the adventure of balance means being open to
								adjustments, making necessary shifts, and being
								willing to let go of what no longer serves us.
								<br />
								So, embrace the adventure of balance. Be
								intentional in your choices, explore different
								paths, and be open to the lessons and growth
								that come along the way. With a sense of
								curiosity, resilience, and self-awareness, you
								can embark on the adventure of balance and
								create a life that is both fulfilling and
								harmonious.
								<br />
							</div>
						</div>
						<div className="col-lg-5 d-flex justify-content-center">
							<img
								className="img-study"
								src={require("../assets/balance.jpg")}
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
		</div>
	);
};

export default Balance;
