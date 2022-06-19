import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import Home from './components/Home';
import Title from './components/Title';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
	return (
		<div className='app-wrapper'>
			<Title />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/password-reset' element={<PasswordReset />} />
				<Route
					path='/home'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
