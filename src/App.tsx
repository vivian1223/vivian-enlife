import React from 'react';
import styles from './App.module.css';
import Header from './layouts/molecules/Header';
import Profile from './layouts/molecules/Profile';
import Horizon from './layouts/atom/Horizon';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Profile />
			<Horizon />
		</div>
	);
}

export default App;
