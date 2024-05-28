import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				chevronDown: '/src/assets/required/chevron-down.svg',
				chevronDownDark: '/src/assets/required/dark:chevron-down.svg',
			},
			transitionProperty: {
				margin: 'margin',
			},
		},
	},
	safelist: [
		// {
		// 	pattern: /bg-(inherit|current|transparent|black|white)$/,
		// 	variants: ['hover', 'active'],
		// },
		{
			pattern:
				// /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
				/bg-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)$/,
			variants: ['hover', 'active', 'checked', 'indeterminate'],
		},
		{
			pattern:
				// /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
				/bg-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)\/(10)$/,
		},
		// {
		// 	pattern: /border-(inherit|current|transparent|black|white)$/,
		// 	variants: ['hover', 'active'],
		// },
		{
			pattern:
				// /border-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
				/border-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)$/,
			variants: ['hover', 'active', 'dark:hover', 'peer-checked'],
		},
		{
			pattern:
				// /border-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)\/(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/,
				/border-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)\/(50)$/,
			variants: ['hover', 'active'],
		},
		{
			pattern:
				// /text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)\/(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/,
				/text-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)$/,
			variants: ['hover', 'active', 'dark:hover'],
		},
		// {
		// 	pattern: /hidden$/,
		// 	variants: ['sm'],
		// },
	],
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
export default config;
