import React, { FC } from 'react';
import dayjs from 'dayjs';
import PERIOD, { TPeriod } from '@/constants/periods.constant';
// import { useTranslation } from 'react-i18next';

interface IDaysPartialProps {
	activeTab: TPeriod;
}
const DaysPartial: FC<IDaysPartialProps> = (props) => {
	// const { i18n } = useTranslation();
	const { activeTab } = props;
	return (
		<b>
			{/* {activeTab === PERIOD.DAY && dayjs().locale(i18n.language).format('LL')} */}
			{/* {activeTab === PERIOD.WEEK && */}
			{/* 	`${dayjs().startOf('week').locale(i18n.language).format('MMMM D')} - ${dayjs() */}
			{/* 		.endOf('week') */}
			{/* 		.locale(i18n.language) */}
			{/* 		.format('MMMM D, YYYY')}`} */}
			{/* {activeTab === PERIOD.MONTH && */}
			{/* 	dayjs().startOf('month').locale(i18n.language).format('MMMM, YYYY')} */}

			{activeTab === PERIOD.DAY && dayjs().format('LL')}
			{activeTab === PERIOD.WEEK &&
				`${dayjs().startOf('week').format('MMMM D')} - ${dayjs()
					.endOf('week')
					.format('MMMM D, YYYY')}`}
			{activeTab === PERIOD.MONTH && dayjs().startOf('month').format('MMMM, YYYY')}
		</b>
	);
};

export default DaysPartial;
