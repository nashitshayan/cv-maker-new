import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserAuthContextProvider>
			<Router>
				<App />
			</Router>
		</UserAuthContextProvider>
	</React.StrictMode>,
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
