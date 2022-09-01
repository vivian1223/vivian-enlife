import React from 'react';
import styles from './index.module.css';
import profileImage from '../../../images/profile.jpg';
import Card from '../../atom/Card';

const ProfileContent = () => {
	return (
		<div className={styles.profileCard}>
			<div className={styles.profileImageContainer}>
				<img className={styles.profileImage} src={profileImage} alt="profile" />
			</div>
			<h1 className={styles.profileName}>Vivian Yeh</h1>
			<p className={styles.profileIntro}>
				Hi，歡迎來到 RD 少女養成計劃，我在這裡陪你探索理想工作。
			</p>
		</div>
	);
};

// const ProfileContent = () => {
// 	return (
// 		<div>
// 			<div className={styles.profileContent}>
// 				<div className={styles.profileTitle}>
// 					<h1>Front-End</h1>
// 					<h2>Developer</h2>
// 				</div>
// 				<ul className={styles.profileList}>
// 					<li> 英文系跨領域轉職</li>
// 					<li> 職涯探索 / 自我成長 / 時間管理</li>
// 					<li> React / Redux / RWD</li>
// 				</ul>
// 			</div>
// 			<div className={styles.profileImageContainer}>
// 				<img className={styles.profileImage} src={profileImage} alt="profile" />
// 			</div>
// 		</div>
// 	);
// };

const Profile = () => (
	<div className={styles.profile}>
		<Card content={<ProfileContent />} />
	</div>
);

export default Profile;
