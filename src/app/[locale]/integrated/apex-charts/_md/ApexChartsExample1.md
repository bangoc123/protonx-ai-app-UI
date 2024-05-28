```tsx
import React, { useState } from 'react';
import { IChartOptions } from './interface/chart.interface';
import Chart from './components/Chart';

const MyComponent = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: 'Page view',
				data: [180, 217, 196, 243, 223, 298, 321],
			},
		],
		options: {
			chart: {
				height: 300,
				type: 'line',
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				// enabled: true,
			},
			stroke: {
				curve: 'smooth',
			},
			markers: {
				size: 0,
			},
			xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				title: {
					text: 'Days',
				},
			},
			yaxis: {
				title: {
					text: 'Views',
				},
			},
		},
	});
	return (
		<Chart
			series={state.series}
			options={state.options}
			type={state.options.chart?.type}
			height={state.options.chart?.height}
		/>
	);
};

export default MyComponent;
```
