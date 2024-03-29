import React from 'react';
import '../styles/About.css';
import GreenCheck from '../images/green-check.png'

const About = () => {
	return (
		<div className="about-section mt-0 mt-lg-5">
			<div className="container py-3 py-lg-5">
				<div className="row py-3 py-lg-4">
					<div className="col-12">
						<h3 className="py-3 sans-serif about-header">About E-CHECK<img className="img-fluid green-check pl-2" src={GreenCheck} alt="Green Check"/></h3>
						<p className="about-paragraph">E-Check has made a significant impact in finding the best price plan for users all around the world. Created through Ezoic, an award-winning technology and Google Certified Publishing Partner. Simply enter your monthly page views using our quick and easy E-Check tool in order to see the price we would charge per month. Over 300 websites used Ezoic's technology and saw exponential increases in revenue and traffic. Check out our price tier below.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;