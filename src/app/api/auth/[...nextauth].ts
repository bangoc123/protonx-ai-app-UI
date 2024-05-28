import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
	// Configure one or more authentication providers
	pages: {
		signIn: '/login',
		// signOut: '/auth/signout',
		// error: '/auth/error', // Error code passed in query string as ?error=
		// verifyRequest: '/auth/verify-request', // (used for check email message)
		// newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
	},
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'username' },
				password: { label: 'Password', type: 'password' },
			},
			// eslint-disable-next-line @typescript-eslint/require-await,@typescript-eslint/no-unused-vars
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				const user = { id: '6', name: 'scottnewton', email: 'scottnewton@site.com' };

				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user;
				}
				// If you return null then an error will be displayed advising the user to check their details.
				return null;

				// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
			},

			// async authorize(credentials, req) {
			// 	if (!credentials?.username || !credentials?.password) return null;
			// 	try {
			// 		const user = await login(
			// 			credentials.username,
			// 			credentials.password
			// 		);
			// 		return user;
			// 	} catch (e) {
			// 		console.error(e);
			// 		return null;
			// 	}
			// },
		}),
		// ...add more providers here
	],
};

// eslint-disable-next-line @typescript-eslint/require-await
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	// @ts-ignore
	if (req.query.nextauth.includes('callback') && req.method === 'POST') {
		// eslint-disable-next-line no-console
		console.log('Handling callback request from my Identity Provider', req.body);
	}

	// Get a custom cookie value from the request
	const someCookie = req.cookies['some-custom-cookie'];

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return NextAuth(req, res, {
		...authOptions,
		callbacks: {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			session({ session, token }) {
				// Return a cookie value as part of the session
				// This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
				// @ts-ignore
				session.someCookie = someCookie;
				return session;
			},
		},
	});
}
