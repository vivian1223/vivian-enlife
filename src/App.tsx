import React from 'react';
import styles from './App.module.css';
import Header from './layouts/molecules/Header';
import Profile from './layouts/molecules/Profile';
import News from './layouts/molecules/News';
import Horizon from './layouts/atom/Horizon';
import Footer from './layouts/molecules/Footer';
import Recommendation from './layouts/molecules/Recommendation';
import Hot from './layouts/molecules/Hot';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Profile />
			<Horizon />
			<News />
			<Horizon />
			<Hot />
			<Horizon />
			<Recommendation />
			<Footer />
		</div>
	);
}

export default App;
