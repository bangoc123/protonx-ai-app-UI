```tsx
import React, { useState } from 'react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';
import themeConfig from './config/theme.config';

const MyComponent = () => {
	const [state, setState] = useState<RangeKeyDict>({
		selection: {
			startDate: dayjs().startOf('week').add(-1, 'week').toDate(),
			endDate: dayjs().endOf('week').toDate(),
			key: 'selection',
		},
		selection2: {
			startDate: dayjs().startOf('week').add(-1, 'week').add(2, 'day').toDate(),
			endDate: dayjs().endOf('week').add(-4, 'day').toDate(),
			key: 'selection2',
		},
		selection3: {
			startDate: dayjs().startOf('week').add(2, 'week').add(2, 'day').toDate(),
			endDate: dayjs().startOf('week').add(3, 'week').add(5, 'day').toDate(),
			key: 'selection3',
		},
		selection4: {
			startDate: dayjs().startOf('week').add(-2, 'week').add(2, 'day').toDate(),
			endDate: dayjs().startOf('week').add(-2, 'week').add(5, 'day').toDate(),
			key: 'selection4',
		},
	});

	return (
		<DateRangePicker
			onChange={(item) => setState({ ...state, ...item })}
			moveRangeOnFirstSelection={false}
			retainEndDateOnFirstSelection={false}
			months={2}
			ranges={Object.values(state)}
			direction='horizontal'
			rangeColors={[
				colors[themeConfig.themeColor][themeConfig.themeColorShade],
				colors.emerald[themeConfig.themeColorShade],
				colors.amber[themeConfig.themeColorShade],
				colors.violet[themeConfig.themeColorShade],
			]}
		/>
	);
};

export default MyComponent;
```
