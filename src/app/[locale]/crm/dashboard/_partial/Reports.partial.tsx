'use client';

import React, { useState } from 'react';
import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import usersDb from '@/mocks/db/users.db';
import { IChartOptions } from '@/interface/chart.interface';
import Chart from '@/components/Chart';
import Icon from '@/components/icon/Icon';
import Image from 'next/image';

const ReportsPartial = () => {
	const [state] = useState<IChartOptions>({
		series: [80, 90, 40, 70],
		options: {
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: '2rem',
						},
						value: {
							fontSize: '1rem',
						},
						total: {
							show: true,
							label: 'Average',
							formatter(): string {
								return '70%';
							},
						},
					},
					track: {
						show: true,
						background: colors.zinc['500'],
						strokeWidth: '100%',
						opacity: 0.2,
						margin: 2,
					},
				},
			},
			stroke: {
				lineCap: 'round',
			},
			labels: [
				usersDb[0].firstName,
				usersDb[1].firstName,
				usersDb[2].firstName,
				usersDb[3].firstName,
			],
		},
	});
	const [state2] = useState<IChartOptions>({
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
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Reports</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<span className='font-bold text-zinc-500'>A Team</span>
					<div className='flex -space-x-2 overflow-hidden'>
						<Image
							src={usersDb[0].image?.thumb as string}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[1].image?.thumb as string}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[2].image?.thumb as string}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[3].image?.thumb as string}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
					</div>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='-mx-4 flex h-full gap-y-4 divide-x divide-dashed divide-zinc-500/25 max-md:flex-wrap'>
					<div className='flex-shrink-0 px-4 max-md:w-full max-md:justify-center md:max-w-[220px]'>
						<Card className='border border-zinc-500/25 dark:border-zinc-500/50'>
							<CardHeader>
								<CardHeaderChild className='text-zinc-500'>Average</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<div className='flex items-center gap-2'>
									<Icon icon='HeroClock' size='text-5xl' color='blue' />
									<span className='text-4xl font-bold'>~7</span>
									<span className='text-lg'>Hours</span>
								</div>
							</CardBody>
						</Card>
						<Chart
							series={state.series}
							options={state.options}
							type='radialBar'
							height={220}
						/>
					</div>
					<div className='grow px-4'>
						<Chart
							series={state2.series}
							options={state2.options}
							type='rangeBar'
							height={290}
						/>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default ReportsPartial;
