'use client';

import React, { useState } from 'react';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import { IChartOptions } from '@/interface/chart.interface';
import Chart from '@/components/Chart';

const ChartPartial = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: 'Page view',
				data: [180, 217, 196, 243, 223, 298, 321],
			},
		],
		options: {
			chart: {
				height: 290,
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
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Daily View</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<Chart series={state.series} options={state.options} type='line' height={290} />
			</CardBody>
		</Card>
	);
};

export default ChartPartial;
