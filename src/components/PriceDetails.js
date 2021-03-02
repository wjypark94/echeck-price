import React from 'react';
import '../styles/PriceDetails.css';

const PriceDetails = () => {
	return (
		<div className="price-details-section">
			<div className="container py-5">
				<div className="row">
					<div className="col-12 py-3">
						<h2 className="sans-serif">Pricing Structure Tier</h2>
					</div>
					<div className="col-6 py-3">
						<h2 className="sans-serif">Beginner</h2>
						<p>0-500 page views per month</p>
						<p>$4.99 monthly plan</p>
					</div>
					<div className="col-6 py-3">
						<h2 className="sans-serif">Standard</h2>
						<p>501-1000 views per month</p>
						<p>$9.99 monthly plan</p>
					</div>
					<div className="col-4 py-3">
						<h2 className="sans-serif">Gold</h2>
						<p>1001-1500 views per month</p>
						<p>$14.99 monthly plan</p>
					</div>
					<div className="col-4 py-3">
						<h2 className="sans-serif">Platinum</h2>
						<p>1501-2000 views per month</p>
						<p>$19.99 monthly plan</p>
					</div>
					<div className="col-4 py-3">
						<h2 className="sans-serif">VIP</h2>
						<p>2001 views and above</p>
						<p>$29.99 monthly plan</p>
					</div>
				</div>
			</div>
		
		</div>
	)
}

export default PriceDetails;