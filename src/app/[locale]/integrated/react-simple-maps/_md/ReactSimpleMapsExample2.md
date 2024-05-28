```tsx
import React from 'react';
import { Annotation, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import useDarkMode from '@/hooks/useDarkMode';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const allStates = [
	{ id: 'AL', val: '01' },
	{ id: 'AK', val: '02' },
	{ id: 'AS', val: '60' },
	{ id: 'AZ', val: '04' },
	{ id: 'AR', val: '05' },
	{ id: 'CA', val: '06' },
	{ id: 'CO', val: '08' },
	{ id: 'CT', val: '09' },
	{ id: 'DE', val: '10' },
	{ id: 'DC', val: '11' },
	{ id: 'FL', val: '12' },
	{ id: 'FM', val: '64' },
	{ id: 'GA', val: '13' },
	{ id: 'GU', val: '66' },
	{ id: 'HI', val: '15' },
	{ id: 'ID', val: '16' },
	{ id: 'IL', val: '17' },
	{ id: 'IN', val: '18' },
	{ id: 'IA', val: '19' },
	{ id: 'KS', val: '20' },
	{ id: 'KY', val: '21' },
	{ id: 'LA', val: '22' },
	{ id: 'ME', val: '23' },
	{ id: 'MH', val: '68' },
	{ id: 'MD', val: '24' },
	{ id: 'MA', val: '25' },
	{ id: 'MI', val: '26' },
	{ id: 'MN', val: '27' },
	{ id: 'MS', val: '28' },
	{ id: 'MO', val: '29' },
	{ id: 'MT', val: '30' },
	{ id: 'NE', val: '31' },
	{ id: 'NV', val: '32' },
	{ id: 'NH', val: '33' },
	{ id: 'NJ', val: '34' },
	{ id: 'NM', val: '35' },
	{ id: 'NY', val: '36' },
	{ id: 'NC', val: '37' },
	{ id: 'ND', val: '38' },
	{ id: 'MP', val: '69' },
	{ id: 'OH', val: '39' },
	{ id: 'OK', val: '40' },
	{ id: 'OR', val: '41' },
	{ id: 'PW', val: '70' },
	{ id: 'PA', val: '42' },
	{ id: 'PR', val: '72' },
	{ id: 'RI', val: '44' },
	{ id: 'SC', val: '45' },
	{ id: 'SD', val: '46' },
	{ id: 'TN', val: '47' },
	{ id: 'TX', val: '48' },
	{ id: 'UM', val: '74' },
	{ id: 'UT', val: '49' },
	{ id: 'VT', val: '50' },
	{ id: 'VA', val: '51' },
	{ id: 'VI', val: '78' },
	{ id: 'WA', val: '53' },
	{ id: 'WV', val: '54' },
	{ id: 'WI', val: '55' },
	{ id: 'WY', val: '56' },
];

const offsets = {
	VT: [50, -8],
	NH: [34, 2],
	MA: [30, -1],
	RI: [28, 2],
	CT: [35, 10],
	NJ: [34, 1],
	DE: [33, 0],
	MD: [47, 10],
	DC: [49, 21],
};

const MyComponent = () => {
	const { isDarkTheme } = useDarkMode();

	return (
		<ComposableMap projection='geoAlbersUsa'>
			<Geographies geography={geoUrl}>
				{({ geographies }) => (
					<>
						{geographies.map((geo) => (
							<Geography
								// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
								key={geo.rsmKey}
								stroke={isDarkTheme ? '#ffffff20' : '#00000020'}
								// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
								geography={geo}
								fill={isDarkTheme ? '#ffffff10' : '#00000010'}
							/>
						))}
						{geographies.map((geo) => {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
							const centroid = geoCentroid(geo);
							// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
							const cur = allStates.find((s) => s.val === geo.id);

							return (
								// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
								<g key={`${geo.rsmKey}-name`}>
									{cur &&
										centroid[0] > -160 &&
										centroid[0] < -67 &&
										(Object.keys(offsets).indexOf(cur.id) === -1 ? (
											<Marker coordinates={centroid}>
												<text y='2' fontSize={14} textAnchor='middle'>
													{cur.id}
												</text>
											</Marker>
										) : (
											<Annotation
												subject={centroid}
												// @ts-ignore
												// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
												dx={offsets[cur.id][0]}
												// @ts-ignore
												// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
												dy={offsets[cur.id][1]}
												connectorProps={{}}>
												<text
													x={4}
													fontSize={14}
													alignmentBaseline='middle'>
													{cur.id}
												</text>
											</Annotation>
										))}
								</g>
							);
						})}
					</>
				)}
			</Geographies>
		</ComposableMap>
	);
};

export default MyComponent;
```
