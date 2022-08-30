import React from 'react';
import styles from './index.module.css';
import profileImage from '../../../images/profile.jpg';

const Profile = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.profileContent}>
				<div className={styles.profileTitle}>
					<h1>Front-End</h1>
					<h2>Developer</h2>
				</div>
				<ul className={styles.profileList}>
					<li> 英文系跨領域轉職</li>
					<li> 職涯探索 / 自我成長 / 時間管理</li>
					<li> React / Redux / RWD</li>
				</ul>
			</div>
			<div className={styles.profileImageContainer}>
				<img className={styles.profileImage} src={profileImage} alt="profile" />
			</div>
		</div>
	);
};

export default Profile;
