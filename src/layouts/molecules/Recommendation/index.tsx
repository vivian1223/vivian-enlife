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
		source: 'https://vocus.cc/programming_girl/home',
		title: '《專欄》RD 少女養成計劃',
	},
	{
		id: 2,
		source: 'https://youtu.be/ge4AVZKvhew',
		title: '《影片》轉職三部曲（ㄧ）：如何找到職涯目標？',
	},
	{
		id: 3,
		source: 'https://youtu.be/LdAW3_aCQYQ',
		title: '《影片》轉職三部曲（二）：軟體領域生態談',
	},
	{
		id: 4,
		source: 'https://youtu.be/SYHRCmz1d9Y',
		title: '《影片》轉職三部曲（三）：如何規劃轉職計畫',
	},
];

const LinkContent: React.FC<LinkProperty> = ({ title }) => (
	<div>
		{title}
		<FontAwesomeIcon className={styles.icon} icon={faArrowUpRightFromSquare as IconProp} />
	</div>
);

const Recommendation = () => (
	<div className={styles.recommendation}>
		<h2 className={styles.recommendationTitle}>推薦閱讀</h2>
		<div className={styles.list}>
			{recommendationList.map(({ id, source, title }) => (
				<Link key={id} source={source} content={<LinkContent title={title} />} />
			))}
		</div>
	</div>
);

export default Recommendation;
