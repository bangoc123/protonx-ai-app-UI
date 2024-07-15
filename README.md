# ProtonX Open-source | AI Application Demonstrations

[![ProtonX | AI UI Demos](https://storage.googleapis.com/mle-courses-prod/users/61b6fa1ba83a7e37c8309756/private-files/e5562ba0-daf0-11ee-b551-db727fbed0f6-Screen_Shot_2024_03_05_at_20.00.04.png)](https://fyr.omtanke.studio)

[Live Demo](https://protonx.io/demos)

This is a reusable UI that you can use for your AI project. Tutorials will be available soon on the [ProtonX YouTube](https://www.youtube.com/@ProtonX) channel and [our AI learning platform](https://protonx.io/).

Some applications available

- Chatbot 
- Image Generation
- Audio Generation
- Code Generation
- Sketch to Image
- Chatbot using RAG

<img src="https://storage.googleapis.com/protonx-cdn/Screen%20Shot%202024-07-15%20at%2011.54.18.png">

<img src="https://storage.googleapis.com/mle-courses-prod/users/61b6fa1ba83a7e37c8309756/private-files/dc832af0-dc67-11ee-8d67-a3f51c84003e-Screen_Shot_2024_03_07_at_16.48.18.png" width=600 > 

<img src="https://storage.googleapis.com/mle-courses-prod/users/61b6fa1ba83a7e37c8309756/private-files/2a899fe0-daf1-11ee-b2fe-853e9dc23096-Screen_Shot_2024_03_05_at_20.00.47.png" width=600>

# Getting Started with Create React App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Install Dependencies

### `npm install` or `yarn install`

## SSL

```bash
openssl rand -base64 32
```

You can quickly create a good value on the command line via this openssl command. Add the resulting code as the value of "NEXTAUTH_SECRET" in the ".env.local" file.

## Available Scripts

First, run the development server:

### `npm run dev` or `yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

### `npm run lint` or `yarn run lint`

Controls the project according to Eslint rules.

### `npm run lint:fix` or `yarn run lint:fix`

Inspects the project according to Eslint rules and corrects them according to those rules.

### `npm run prettier:fix` or `yarn run prettier:fix`

Inspects the project according to Prettier rules and corrects them according to those rules.

### `npm run icon` or `yarn run icon`

Prepares svg format icons in the `SvgIcons` folder for use in the project. Names the icon's name in `PascalCase` format.

## Backend

This app will call a backend. You also need to set up a backend using [this project](https://github.com/bangoc123/protonx-ai-backend).

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [NextAuth.js](https://next-auth.js.org/getting-started/introduction) - learn about NextAuth.js

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Project Structure

```
fyr
├── public
├── src
│   ├── app
│   │   ├── [locale]
│   │   ├── api
│   │   ├── styles
│   │   └── favicon.ico
│   ├── assets
│   ├── components
│   ├── config
│   │   ├── pages.config.ts
│   │   └── theme.config.ts
│   ├── constants
│   ├── context
│   ├── hooks
│   ├── interface
│   ├── locales
│   ├── mocks
│   ├── routes
│   │   ├── asideRoutes.tsx
│   │   ├── footerRoutes.tsx
│   │   └── headerRoutes.tsx
│   ├── templates
│   ├── types
│   ├── utils
│   ├── i18n.ts
│   └── middleware.ts
├── SvgIcons
├── .env
├── .env.development
├── .env.local
├── .env.production
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .npmrc
├── .prettierignore
├── .svgrc
├── global.d.ts
├── i18nConfig.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.eslint.json
└── tsconfig.json
```

# Tailwind Configure

There are 22 colors defined in Tailwind, we have added 8 (zinc `#71717a`, red `#ef4444`, amber `#f59e0b`, lime `#84cc16`, emerald `#10b981`, sky `#0ea5e9`, blue `#3b82f6`, violet `#8b5cf6`) of them for the components of Fyr. If you wish, you can activate other colors or define new colors.

You can add new values to "TColors" in the [src/types/colors.type.ts](src/types/colors.type.ts) file for use in the project and don't forget to add them to the [safelist](https://tailwindcss.com/docs/content-configuration#safelisting-classes).

# Theme Configure

You can edit the theme's settings in the [src/config/theme.config.ts](src/config/theme.config.ts) file.

# Pages Configure

If you save your page information in the above format in the [src/config/pages.config.ts](src/config/pages.config.ts) file, you can easily use it in the menus.

# Architecture of the project

## [src/app/[locale]/layout.tsx](src/app/[locale]/layout.tsx)

```tsx
//...
export function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }));
}

const RootLayout = ({
	children,
	params: { locale },
}: {
	children: ReactNode;
	params: { locale: string };
}) => {
	dayjs.extend(localizedFormat);
	return (
		<Providers>
			<html suppressHydrationWarning lang={locale} dir={dir(locale)}>
				<body className={poppins.className}>
					<div id='root'>
						<div data-component-name='App' className='flex grow flex-col'>
							<AsideRouter />
							<Wrapper>
								<HeaderRouter />
								<AppWrapper>{children}</AppWrapper>
								<FooterRouter />
							</Wrapper>
						</div>
					</div>
					<div id='portal-root' />
				</body>
			</html>
		</Providers>
	);
};
//...
```

### [src/app/[locale]/\_providers.tsx](src/app/[locale]/_providers.tsx)

```tsx
//...
const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeContextProvider>
			<NextAuthProvider>{children}</NextAuthProvider>
		</ThemeContextProvider>
	);
};
//...
```

### [src/app/[locale]/\_app.tsx](src/app/[locale]/_app.tsx)

```tsx
//...
const AppWrapper = ({ children }: { children: ReactNode }) => {
	const { fontSize } = useFontSize();
	dayjs.extend(localizedFormat);

	getOS();

	return (
		<>
			<style>{`:root {font-size: ${fontSize}px}`}</style>
			{children}
		</>
	);
};
//...
```

#### [src/routes/asideRoutes.tsx](src/routes/asideRoutes.tsx)

If you do not want to customize the project in this file, you do not need to make any changes. In this component, only [src/routes/asideRoutes.tsx](src/routes/asideRoutes.tsx) file sets which component will be shown in which path.

```tsx
const asideRoutes: TRoute[] = [
	{ path: authPages.loginPage.to, element: null },
	{ path: '/*', element: <DefaultAsideTemplate /> },
];
```

You can set the "Aside Templates" to be displayed on the paths you want. If you don't want any "Aside" in a path, you can set the element to `null`.

#### [src/routes/headerRoutes.tsx](src/routes/headerRoutes.tsx)

If you do not want to customize the project in this file, you do not need to make any changes. In this component, only [src/routes/headerRoutes.tsx](src/routes/headerRoutes.tsx) file sets which component will be shown in which path.

```tsx
const headerRoutes: RouteProps[] = [
	{ path: authPages.loginPage.to, element: null },
	{ path: `${componentsPages.uiPages.to}/*`, element: <ComponentAndTemplateHeaderTemplate /> },
	{ path: '', element: null },
	{ path: '/*', element: <DefaultHeaderTemplate /> },
];
```

You can set the "Header Templates" to be displayed on the paths you want. If you don't want any "Header" in a path, you can set the element to `null`.

If you will have data about the page in "Header", specify that there will not be any "Header" in that path with `null` and define it within the page. So you don't have to worry about moving the data up.

### Without i18n Page Example

##### [src/app/[locale]/example-page/\_client.tsx](src/app/[locale]/example-page/_client.tsx)

```tsx
'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Container from '@/components/layouts/Container/Container';

const ExamplePageClient = () => {
	const [state, setState] = useState<boolean>(false);

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>SubheaderLeft</SubheaderLeft>
				<SubheaderRight>SubheaderRight</SubheaderRight>
			</Subheader>
			<Container>Container</Container>
		</PageWrapper>
	);
};

export default ExamplePageClient;
```

##### [src/app/[locale]/example-page/page.tsx](src/app/[locale]/example-page/page.tsx)

```tsx
import React from 'react';
import ExamplePageClient from './_client';

const ExamplePage = () => {
	return <ExamplePageClient />;
};

export default ExamplePage;
```

### With i18n Page Example

##### [src/app/[locale]/example-page-with-i18n/\_client.tsx](src/app/[locale]/example-page/_client.tsx)

```tsx
'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Container from '@/components/layouts/Container/Container';
import { useTranslation } from 'react-i18next';

const ExamplePageClient = () => {
	const [state, setState] = useState<boolean>(false);
	const { t } = useTranslation();

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>SubheaderLeft</SubheaderLeft>
				<SubheaderRight>SubheaderRight</SubheaderRight>
			</Subheader>
			<Container>{t('Container')}</Container>
		</PageWrapper>
	);
};

export default ExamplePageClient;
```

##### [src/app/[locale]/example-page-with-i18n/page.tsx](src/app/[locale]/example-page/page.tsx)

```tsx
import React from 'react';
import TranslationsProvider from '@/components/TranslationsProvider';
import ExamplePageClient from './_client';

const i18nNamespaces = ['translation'];

const ExamplePage = ({ params: { locale } }: { params: { locale: string } }) => {
	return (
		<TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
			<ExamplePageClient />
		</TranslationsProvider>
	);
};

export default ExamplePage;
```

You can use this method on pages where you set the null value for "Header" as described in the [src/routes/headerRoutes.tsx](#srccomponentsrouterheaderroutertsx) section.

##### [src/app/[locale]/example-page/\_client.tsx](src/app/[locale]/example-page/_client.tsx)

```tsx
'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Header, { HeaderLeft, HeaderRight } from '@/components/layouts/Header/Header';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Container from '@/components/layouts/Container/Container';

const ExamplePageClient = () => {
	const [state, setState] = useState<boolean>(false);

	return (
		<>
			<Header>
				<HeaderLeft>HeaderLeft</HeaderLeft>
				<HeaderRight>HeaderRight</HeaderRight>
			</Header>
			<PageWrapper>
				<Subheader>
					<SubheaderLeft>SubheaderLeft</SubheaderLeft>
					<SubheaderRight>SubheaderRight</SubheaderRight>
				</Subheader>
				<Container>Container</Container>
			</PageWrapper>
		</>
	);
};

export default ExamplePageClient;
```

#### [src/routes/footerRoutes.tsx](src/routes/footerRoutes.tsx)

If you do not want to customize the project in this file, you do not need to make any changes. In this component, only [src/routes/footerRoutes.tsx](src/routes/footerRoutes.tsx) file sets which component will be shown in which path.

```tsx
const footerRoutes: RouteProps[] = [
	{ path: authPages.loginPage.to, element: null },
	{ path: '/*', element: <DefaultFooterTemplate /> },
];
```

You can set the "Footer Templates" to be displayed on the paths you want. If you don't want any "Footer" in a path, you can set the element to `null`.

If you will have data about the page in "Footer", specify that there will not be any "Footer" in that path with `null` and define it within the page. So you don't have to worry about moving the data up.
