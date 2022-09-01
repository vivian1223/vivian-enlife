import React from 'react';
import styles from './App.module.css';
import Header from './layouts/molecules/Header';
import Profile from './layouts/molecules/Profile';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Profile />
		</div>
	);
}

export default App;
