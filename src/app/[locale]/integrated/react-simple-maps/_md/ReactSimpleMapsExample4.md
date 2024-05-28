```tsx
import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import colors from 'tailwindcss/colors';
import useDarkMode from '../../../../../hooks/useDarkMode';
import themeConfig from '../../../../../config/theme.config';

const markers = [
	{
		markerOffset: -15,
		name: 'Buenos Aires',
		coordinates: [-58.3816, -34.6037],
	},
	{ markerOffset: -15, name: 'La Paz', coordinates: [-68.1193, -16.4897] },
	{ markerOffset: 25, name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
	{ markerOffset: 25, name: 'Santiago', coordinates: [-70.6693, -33.4489] },
	{ markerOffset: 25, name: 'Bogota', coordinates: [-74.0721, 4.711] },
	{ markerOffset: 25, name: 'Quito', coordinates: [-78.4678, -0.1807] },
	{ markerOffset: -15, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
	{ markerOffset: -15, name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
	{ markerOffset: 25, name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
	{ markerOffset: 25, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
	{ markerOffset: -15, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
	{ markerOffset: -15, name: 'Lima', coordinates: [-77.0428, -12.0464] },
];

const MyComponent = () => {
	const { isDarkTheme } = useDarkMode();

	return (
		<ComposableMap
			projection='geoAzimuthalEqualArea'
			projectionConfig={{
				rotate: [58, 20, 0],
				scale: 400,
			}}>
			<Geographies geography='/features.json'>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
							key={geo.rsmKey}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							geography={geo}
							fill={isDarkTheme ? '#ffffff10' : '#00000010'}
							stroke={isDarkTheme ? '#ffffff20' : '#00000020'}
						/>
					))
				}
			</Geographies>
			{markers.map(({ name, coordinates, markerOffset }) => (
				// @ts-ignore
				<Marker key={name} coordinates={coordinates}>
					<circle
						r={10}
						fill={colors[themeConfig.themeColor][themeConfig.themeColorShade]}
						stroke='#fff'
						strokeWidth={2}
					/>
					<text
						textAnchor='middle'
						y={markerOffset}
						style={{
							fontFamily: 'system-ui',
							fill: colors.zinc['500'],
						}}>
						{name}
					</text>
				</Marker>
			))}
		</ComposableMap>
	);
};

export default MyComponent;
```
