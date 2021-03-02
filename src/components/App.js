import '../styles/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Tracker from './Tracker.js';
import PriceDetails from './PriceDetails.js';
import About from './About.js';
import Footer from './Footer.js';

const App = () => {
	return (
		<div className="App">
			<Header/>
			<Tracker/>
			<About/>
			<PriceDetails/>
			<Footer/>
		</div>
	)
}

export default App;