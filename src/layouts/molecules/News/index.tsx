import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import Link from '../../atom/Link';

const LinkContent = () => (
	<div>
		鐵人賽：Functional Programming 新手指南
		<FontAwesomeIcon className={styles.icon} icon={faArrowUpRightFromSquare as IconProp} />
	</div>
);

const News = () => (
	<div className={styles.news}>
		<h2 className={styles.newsTitle}>最新消息</h2>
		<Link
			source="https://ithelp.ithome.com.tw/users/20151147/ironman/5232"
			content={<LinkContent />}
		/>
	</div>
);

export default News;
