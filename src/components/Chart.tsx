'use client';

import React, { FC, memo } from 'react';
import { Props } from 'react-apexcharts';
import colors from 'tailwindcss/colors';
import _ from 'lodash';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

export interface IChartProps extends Props {
	width?: string | number;
	height?: string | number;
}

const Chart: FC<IChartProps> = (props) => {
	const { series, options, type, width = '100%', height = 'auto' } = props;

	const defaultOptions: Props['options'] = {
		chart: {
			toolbar: {
				show: false,
			},
		},
		colors: [
			colors.blue['500'],
			colors.emerald['500'],
			colors.amber['500'],
			colors.rose['500'],
			colors.purple['500'],
		],
		dataLabels: {
			enabled: false,
		},
		grid: {
			show: true,
			borderColor: `${colors.zinc['500']}25`,
			strokeDashArray: 0,
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},

			padding: {
				top: 0,
				right: 10,
				bottom: 0,
				left: 10,
			},
		},
		legend: {
			labels: {
				colors: colors.zinc['500'],
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
			},
			candlestick: {
				colors: {
					upward: `${colors.green['500']}`,
					downward: `${colors.rose['500']}`,
				},
			},
			boxPlot: {
				colors: {
					upper: `${colors.green['500']}`,
					lower: `${colors.rose['500']}`,
				},
			},
		},
		stroke: {
			// show: true,
			// width: 2,
			// colors: ['transparent'],
		},

		tooltip: {
			theme: 'dark',
		},

		xaxis: {
			axisBorder: {
				show: true,
				color: `${colors.zinc['500']}50`,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: colors.zinc['500'],
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: colors.zinc['500'],
				},
			},
			title: {
				style: {
					color: colors.zinc['500'],
				},
			},
		},
	};

	return (
		<ReactApexChart
			options={_.merge(defaultOptions, options)}
			series={series}
			type={type}
			height={height}
			width={width}
		/>
	);
};
Chart.displayName = 'Chart';

export default memo(Chart);
