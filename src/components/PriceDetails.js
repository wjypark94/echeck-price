import React from 'react';
import '../styles/PriceDetails.css';
import AvatarBeginner from '../images/avatar-one.png';
import AvatarStandard from '../images/avatar-two.png';
import AvatarGold from '../images/avatar-three.png';
import AvatarPlatinum from '../images/avatar-four.png';
import AvatarVip from '../images/avatar-five.png';

const PriceDetails = () => {
	return (
		<div className="price-details-section">
			<div className="container py-5">
				<div className="row">
					<div className="col-12 py-3">
						<h2 className="sans-serif">Pricing Structure Tier</h2>
					</div>
					<div className="col-12 col-lg-6 py-3">
						<img className="img-fluid" src={AvatarBeginner} alt="Beginner"/>
						<h2 className="sans-serif py-2">Beginner</h2>
						<p>0-500 page views per month</p>
						<p>$4.99 monthly plan</p>
					</div>
					<div className="col-12 col-lg-6 py-3">
						<img className="img-fluid" src={AvatarStandard} alt="Standard"/>
						<h2 className="sans-serif py-2">Standard</h2>
						<p>501-1000 views per month</p>
						<p>$9.99 monthly plan</p>
					</div>
					<div className="col-12 col-lg-4 py-3">
						<img className="img-fluid" src={AvatarGold} alt="Gold"/>
						<h2 className="sans-serif py-2">Gold</h2>
						<p>1001-1500 views per month</p>
						<p>$14.99 monthly plan</p>
					</div>
					<div className="col-12 col-lg-4 py-3">
						<img className="img-fluid" src={AvatarPlatinum} alt="Platinum"/>
						<h2 className="sans-serif py-2">Platinum</h2>
						<p>1501-2000 views per month</p>
						<p>$19.99 monthly plan</p>
					</div>
					<div className="col-12 col-lg-4 py-3">
						<img className="img-fluid" src={AvatarVip} alt="Vip"/>
						<h2 className="sans-serif py-2">VIP</h2>
						<p>2001 views and above</p>
						<p>$29.99 monthly plan</p>
					</div>
				</div>
			</div>
		
		</div>
	)
}

export default PriceDetails;