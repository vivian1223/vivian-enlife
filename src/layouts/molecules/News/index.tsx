import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import Link from '../../atom/Link';

interface LinkProperty {
	title: string;
}

const recommendationList = [
	{
		id: 1,
		source: 'https://ithelp.ithome.com.tw/users/20151147/ironman/5232',
		title: '《鐵人賽》致 JS 開發者的 FP 新手指南',
	},
	{
		id: 2,
		source: 'https://vocus.cc/article/6268d64afd897800017a368b',
		title: '【自學程式】那些你沒搞懂的 Flexbox 及實務應用',
	},
];

const LinkContent: React.FC<LinkProperty> = ({ title }) => (
	<div>
		{title}
		<FontAwesomeIcon className={styles.icon} icon={faArrowUpRightFromSquare as IconProp} />
	</div>
);

const News = () => (
	<div className={styles.news}>
		<h2 className={styles.newsTitle}>最新消息</h2>
		<div className={styles.list}>
			{recommendationList.map(({ id, source, title }) => (
				<Link key={id} source={source} content={<LinkContent title={title} />} />
			))}
		</div>
	</div>
);

export default News;
