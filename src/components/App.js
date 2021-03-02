
import '../componentStyles/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Tracker from './Tracker.js';

const App = () => {
	return (
		<div className="App">
			<Header/>
			<Tracker/>
		</div>
	)
}

export default App;