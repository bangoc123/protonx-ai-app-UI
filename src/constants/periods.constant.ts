type TPeriodKEY = 'DAY' | 'WEEK' | 'MONTH';
type TPeriodText = 'Day' | 'Week' | 'Month';

export type TPeriod = {
	text: TPeriodText;
};
export type TPeriods = {
	[key in TPeriodKEY]: TPeriod;
};

const PERIOD: TPeriods = {
	DAY: { text: 'Day' },
	WEEK: { text: 'Week' },
	MONTH: { text: 'Month' },
};

export default PERIOD;
