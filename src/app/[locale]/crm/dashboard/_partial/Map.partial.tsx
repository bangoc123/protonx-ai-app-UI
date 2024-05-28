'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import sortBy from 'lodash/sortBy';
import colors from 'tailwindcss/colors';
import useDarkMode from '@/hooks/useDarkMode';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import themeConfig from '@/config/theme.config';

const MapPartial = ({ composableMapClassName }: { composableMapClassName?: string }) => {
	const { isDarkTheme } = useDarkMode();
	const [data, setData] = useState<string[]>([]);
	const [maxValue, setMaxValue] = useState<number | string | undefined>(0);

	useEffect(() => {
		csv('/data.csv')
			.then((cities) => {
				// @ts-ignore
				const sortedCities = sortBy(cities, (o) => -o.population);
				setMaxValue(sortedCities[0].population);
				// @ts-ignore
				setData(sortedCities);
			})
			.catch(() => {});
	}, []);

	// @ts-ignore
	const popScale = useMemo(() => scaleLinear().domain([0, maxValue]).range([0, 24]), [maxValue]);

	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Online Users</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<ComposableMap
					projectionConfig={{ rotate: [-10, 0, 0] }}
					className={composableMapClassName}>
					<Geographies geography='/features.json'>
						{({ geographies }) =>
							geographies.map((geo) => (
								<Geography
									// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
									key={geo.rsmKey}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
									geography={geo}
									fill={isDarkTheme ? '#ffffff10' : '#00000010'}
								/>
							))
						}
					</Geographies>
					{/* @ts-ignore */}
					{data.map(({ city_code, lng, lat, population }) => {
						return (
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							<Marker key={city_code} coordinates={[lng, lat]}>
								<circle
									className='animate-pulse'
									fill={`${
										colors[themeConfig.themeColor][themeConfig.themeColorShade]
									}50`}
									stroke={`${
										colors[themeConfig.themeColor][themeConfig.themeColorShade]
									}90`}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
									r={popScale(population)}
								/>
							</Marker>
						);
					})}
				</ComposableMap>
			</CardBody>
		</Card>
	);
};
MapPartial.defaultProps = {
	composableMapClassName: undefined,
};

export default MapPartial;
