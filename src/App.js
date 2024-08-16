import React from 'react';
import Home from './components/Home';
import Title from './components/Title';
import Footer from './components/Footer';
function App() {
	return (
		<div className='app-wrapper'>
			<Title />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
