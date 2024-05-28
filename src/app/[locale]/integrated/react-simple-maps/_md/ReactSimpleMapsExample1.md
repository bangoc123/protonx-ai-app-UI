```tsx
import React, { useEffect, useMemo, useState } from 'react';
import { csv } from 'd3-fetch';
import sortBy from 'lodash/sortBy';
import { scaleLinear } from 'd3-scale';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import colors from 'tailwindcss/colors';
import useDarkMode from '@/hooks/useDarkMode';
import themeConfig from '@/config/theme.config';

const MyComponent = () => {
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
		<ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
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
	);
};

export default MyComponent;
```
