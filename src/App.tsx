import React from 'react';
import styles from './App.module.css';
import Header from './layouts/molecules/Header';
import Profile from './layouts/molecules/Profile';
import News from './layouts/molecules/News';
import Footer from './layouts/molecules/Footer';
import Recommendation from './layouts/molecules/Recommendation';
import Hot from './layouts/molecules/Hot';
import Contact from './layouts/molecules/Contact';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Profile />
			<News />
			<Hot />
			<Recommendation />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
