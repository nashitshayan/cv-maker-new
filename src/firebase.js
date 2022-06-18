import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
//configure fireabase
const firebaseConfig = {
	apiKey: 'AIzaSyCg1S7X8fpyPyy92JE0zGvLPpVsRfk56Jk',
	authDomain: 'cv-maker-new.firebaseapp.com',
	projectId: 'cv-maker-new',
	storageBucket: 'cv-maker-new.appspot.com',
	messagingSenderId: '629032471679',
	appId: '1:629032471679:web:5b07de610ba1c0c89ec34a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };
