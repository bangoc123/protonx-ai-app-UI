```tsx
import React from 'react';
import { Annotation, ComposableMap, Geographies, Geography } from 'react-simple-maps';
import colors from 'tailwindcss/colors';
import useDarkMode from '@/hooks/useDarkMode';

const MyComponent = () => {
	const { isDarkTheme } = useDarkMode();

	return (
		<ComposableMap
			projection='geoAzimuthalEqualArea'
			projectionConfig={{
				rotate: [-10.0, -52.0, 0],
				center: [-5, -3],
				scale: 1100,
			}}>
			<Geographies
				geography='/features.json'
				fill={isDarkTheme ? '#ffffff10' : '#00000010'}
				stroke={isDarkTheme ? '#ffffff20' : '#00000020'}
				strokeWidth={0.5}>
				{({ geographies }) =>
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
					geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
				}
			</Geographies>
			<Annotation
				subject={[2.3522, 48.8566]}
				dx={-90}
				dy={-30}
				connectorProps={{
					stroke: colors.blue['500'],
					strokeWidth: 3,
					strokeLinecap: 'round',
				}}>
				<text x='-8' textAnchor='end' alignmentBaseline='middle' fill={colors.blue['500']}>
					Paris
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default MyComponent;
```
