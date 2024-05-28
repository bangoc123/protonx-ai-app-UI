```tsx
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { IChartOptions } from './interface/chart.interface';
import Chart from './components/Chart';
import usersDb from './mocks/db/users.db';

const MyComponent = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: usersDb[0].firstName,
				data: [
					{
						x: 'Design',
						y: [
							dayjs().startOf('week').add(0, 'day').valueOf(),
							dayjs().startOf('week').add(2, 'day').valueOf(),
						],
					},
					{
						x: 'Code',
						y: [
							dayjs().startOf('week').add(2, 'day').valueOf(),
							dayjs().startOf('week').add(4, 'day').valueOf(),
						],
					},
					{
						x: 'Code',
						y: [
							dayjs().startOf('week').add(5, 'day').valueOf(),
							dayjs().startOf('week').add(7, 'day').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(7, 'day').valueOf(),
							dayjs().startOf('week').add(9, 'day').valueOf(),
						],
					},
				],
			},
			{
				name: usersDb[1].firstName,
				data: [
					{
						x: 'Design',
						y: [
							dayjs().startOf('week').add(1, 'day').valueOf(),
							dayjs().startOf('week').add(2, 'day').valueOf(),
						],
					},
					{
						x: 'Code',
						y: [
							dayjs().startOf('week').add(2, 'day').valueOf(),
							dayjs().startOf('week').add(7, 'day').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(7, 'day').valueOf(),
							dayjs().startOf('week').add(10, 'day').valueOf(),
						],
					},
				],
			},
			{
				name: usersDb[2].firstName,
				data: [
					{
						x: 'Design',
						y: [
							dayjs().startOf('week').add(0, 'day').valueOf(),
							dayjs().startOf('week').add(1, 'day').valueOf(),
						],
					},
					{
						x: 'Code',
						y: [
							dayjs().startOf('week').add(3, 'day').valueOf(),
							dayjs().startOf('week').add(5, 'day').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(9, 'day').valueOf(),
							dayjs().startOf('week').add(10, 'day').valueOf(),
						],
					},
				],
			},
			{
				name: usersDb[3].firstName,
				data: [
					{
						x: 'Design',
						y: [
							dayjs().startOf('week').add(0, 'day').valueOf(),
							dayjs().startOf('week').add(5, 'day').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(8, 'day').valueOf(),
							dayjs().startOf('week').add(10, 'day').valueOf(),
						],
					},
				],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'rangeBar',
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			fill: {},
			dataLabels: {
				enabled: true,
				formatter(val) {
					// @ts-ignore
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					const a = dayjs(val[0]);
					// @ts-ignore
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					const b = dayjs(val[1]);
					const diff = b.diff(a, 'days');
					// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
					return diff + (diff > 1 ? ' days' : ' day');
				},
			},
			xaxis: {
				type: 'datetime',
			},
			legend: {
				position: 'top',
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
