import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerContent}>
				<FontAwesomeIcon className={styles.icon} icon={faBullhorn as IconProp} />
				Vivian 最近在參加 2022 鐵人賽喲～目前進度：Day 1
			</div>
		</div>
	);
};

export default Header;
