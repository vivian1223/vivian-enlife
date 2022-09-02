import React from 'react';
import styles from './App.module.css';
import Header from './layouts/molecules/Header';
import Profile from './layouts/molecules/Profile';
import News from './layouts/molecules/News';
import Horizon from './layouts/atom/Horizon';
import Footer from './layouts/molecules/Footer';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Profile />
			<Horizon />
			<News />
			<Footer />
		</div>
	);
}

export default App;
