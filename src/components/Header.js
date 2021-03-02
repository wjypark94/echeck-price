import React from 'react';
import Icon from '../images/ezoic.png'
import '../styles/Header.css';

const Header = () => {
	return (
		<div className="header-section">
			<div className="container">
				<div className="row">
					<div className="col-12 text-left">
						<img className="img-fluid ezoic-icon" src={Icon} alt="Ezoic Icon"/>
					</div>
					<div className="col-12 py-3">
						<h3 className="header-title sans-serif">E-CHECK</h3>
					</div>
					<div className="col-12">
						<p className="subheader text-uppercase sans-serif">Check your website's traffic price using Ezoic's easy search tool!</p>
						<p className="sans-serif">Enter your monthly pageviews in the search bar and compare using our price tier.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;