import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import SeperationWithTitle from '../../atom/SeperationWithTitle';

import styles from './index.module.css';
import Link from '../../atom/Link';

interface LinkProperty {
	title: string;
}

const recommendationList = [
	{
		id: 1,
		source: 'https://vocus.cc/article/63bd2898fd897800013530be',
		title: '⭐【訂閱讀者限定】轉職 Q & A ：跨領域轉職篇',
	},
	{
		id: 2,
		source: 'https://vocus.cc/article/639c19b5fd89780001dc1cd8',
		title: '⭐【訂閱讀者限定】壓力也要斷捨離，5 個減法生活提案',
	},
	{
		id: 3,
		source: 'https://vocus.cc/article/637b48b0fd897800012015ff',
		title: '【前端開發】FP 基礎：純函式 ＆ 柯里化',
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
		<SeperationWithTitle title="最新消息" />
		<div className={styles.list}>
			{recommendationList.map(({ id, source, title }) => (
				<Link key={id} source={source} content={<LinkContent title={title} />} />
			))}
		</div>
	</div>
);

export default News;
