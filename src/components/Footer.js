import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
	return (
		<div className="footer-section">
			<div className="container py-3">
				<div className="row">
					<div className="col-12 pt-4">
						<a href="https://www.facebook.com/ezoic" target="_blank" className="px-3"><i className="icon fa fa-facebook"></i></a>
						<a href="https://twitter.com/ezoic" target="_blank" className="px-3"><i className="icon fa fa-twitter"></i></a>
						<a href="https://www.linkedin.com/company/ezoic-inc-/" target="_blank" className="px-3"><i className="icon fa fa-linkedin"></i></a>
						<p className="pt-4 copyright-name">Created by William Park</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;