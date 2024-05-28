import { StaticImageData } from 'next/image';
import {
	User1,
	User1Thumb,
	User2,
	User2Thumb,
	User3,
	User3Thumb,
	User4,
	User4Thumb,
	User5,
	User5Thumb,
	User6,
	User6Thumb,
	User7,
	User7Thumb,
	User8,
	User8Thumb,
	User9,
	User9Thumb,
} from '../../assets/images';

export type TUser = {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	password: string;
	position: string;
	role?: string;
	isVerified: boolean;
	image?: {
		org: string | StaticImageData;
		thumb: string | StaticImageData;
	};
	socialAuth?: {
		google: boolean;
		facebook: boolean;
		apple: boolean;
	};
	socialProfiles?: {
		twitter?: string;
		facebook?: string;
		instagram?: string;
		github?: string;
	};
	twoFactorAuth: boolean;
	newsletter?: {
		weeklyNewsletter: boolean;
		lifecycleEmails: boolean;
		promotionalEmails: boolean;
		productUpdates: boolean;
	};
	bio?: string;
};

export const usersDbList = {
	sophieJones: {
		id: '1',
		username: 'sophiejones',
		firstName: 'Sophie',
		lastName: 'Jones',
		email: 'sophiejones@site.com',
		password: '!123Asd',
		position: 'Web Developer',
		isVerified: true,
		image: { org: User1 as StaticImageData, thumb: User1Thumb as StaticImageData },
		socialAuth: {
			google: true,
			facebook: false,
			apple: true,
		},
		role: 'admin',
		twoFactorAuth: true,
		phone: '+1 (555) 555-1234',
		newsletter: {
			weeklyNewsletter: true,
			lifecycleEmails: true,
			promotionalEmails: false,
			productUpdates: true,
		},
	},
	johnDoe: {
		id: '2',
		username: 'johndoe',
		firstName: 'John',
		lastName: 'Doe',
		email: 'johndoe@site.com',
		password: '!123Asd',
		position: 'Administrator',
		isVerified: true,
		image: { org: User2 as StaticImageData, thumb: User2Thumb as StaticImageData },
		socialAuth: {
			google: true,
			facebook: false,
			apple: false,
		},
		twoFactorAuth: false,
	},
	aulistiainen: {
		id: '3',
		username: 'aulistiainen',
		firstName: 'Aulis',
		lastName: 'Tiainen',
		email: 'aulistiainen@site.com',
		password: '!123Asd',
		position: 'Administrator',
		isVerified: true,
		image: { org: User3 as StaticImageData, thumb: User3Thumb as StaticImageData },
		socialAuth: {
			google: true,
			facebook: true,
			apple: true,
		},
		twoFactorAuth: true,
	},
	juliusmolesen: {
		id: '4',
		username: 'juliusmolesen',
		firstName: 'Julius M.',
		lastName: 'Olesen',
		email: 'juliusmolesen@site.com',
		password: '!123Asd',
		position: 'Administrator',
		isVerified: true,
		image: { org: User4 as StaticImageData, thumb: User4Thumb as StaticImageData },
		socialAuth: {
			google: false,
			facebook: false,
			apple: true,
		},
		twoFactorAuth: true,
	},
	jakecorbin: {
		id: '5',
		username: 'jakecorbin',
		firstName: 'Jake',
		lastName: 'Corbin',
		email: 'jakecorbin@site.com',
		password: '!123Asd',
		position: 'Administrator',
		isVerified: true,
		image: { org: User5 as StaticImageData, thumb: User5Thumb as StaticImageData },
		socialAuth: {
			google: true,
			facebook: false,
			apple: true,
		},
		twoFactorAuth: true,
	},
	scottnewton: {
		id: '6',
		username: 'scottnewton',
		firstName: 'Scott',
		lastName: 'Newton',
		email: 'scottnewton@site.com',
		password: '!123Asd',
		position: 'Web Developer',
		isVerified: true,
		image: { org: User6 as StaticImageData, thumb: User6Thumb as StaticImageData },
		socialAuth: {
			google: true,
			facebook: false,
			apple: true,
		},
		role: 'admin',
		twoFactorAuth: true,
		newsletter: {
			weeklyNewsletter: true,
			lifecycleEmails: true,
			promotionalEmails: false,
			productUpdates: true,
		},
		socialProfiles: {
			twitter: 'scottnewton',
			facebook: 'scottnewton',
			instagram: 'scottnewton',
			github: 'scottnewton',
		},
		bio: '[{"type":"paragraph","children":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam "},{"text":"malesuada nisl","bold":true,"underline":true,"italic":true},{"text":" sed metus maximus imperdiet. Aenean tortor mi, pretium et faucibus elementum, pulvinar ultricies ex. Vivamus pharetra dui interdum, semper diam eget, blandit urna. "}]},{"type":"bulleted-list","children":[{"type":"list-item","children":[{"text":"Etiam eu tristique leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "}]},{"type":"list-item","children":[{"text":"In eros mi, vehicula sed ex sed, accumsan posuere leo. "}]},{"type":"list-item","children":[{"text":"Vestibulum auctor aliquam elit, ut maximus felis gravida in."}]}]},{"type":"paragraph","children":[{"text":" Donec feugiat sit amet est egestas porttitor. "},{"text":"Suspendisse","code":true},{"text":" egestas nisi nec urna consequat, quis lobortis elit interdum. "}]},{"type":"block-quote","children":[{"text":"Pellentesque purus nibh, dignissim porta tincidunt id, convallis id lectus. "}]},{"type":"paragraph","children":[{"text":"In varius ipsum non turpis suscipit, ac ultrices nisi congue. "}]},{"type":"heading-one","children":[{"text":"Phasellus eget lectus eget dui."}]},{"type":"heading-two","children":[{"text":"Sodales sollicitudin ut a nisi."}]},{"type":"numbered-list","children":[{"type":"list-item","children":[{"text":"Etiam eu tristique leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "}]},{"type":"list-item","children":[{"text":"In eros mi, vehicula sed ex sed, accumsan posuere leo. "}]},{"type":"list-item","children":[{"text":"Vestibulum auctor aliquam elit, ut maximus felis gravida in."}]}]}]',
	},
	erinslater: {
		id: '7',
		username: 'erinslater',
		firstName: 'Erin',
		lastName: 'Slater',
		email: 'erinslater@site.com',
		password: '!123Asd',
		position: 'User',
		isVerified: true,
		image: { org: User7 as StaticImageData, thumb: User7Thumb as StaticImageData },
		socialAuth: {
			google: true,
			facebook: true,
			apple: false,
		},
		twoFactorAuth: true,
	},
	jeanetteneufville: {
		id: '8',
		username: 'jeanetteneufville',
		firstName: 'Jeanette',
		lastName: 'Neufville',
		email: 'jeanetteneufville@site.com',
		password: '!123Asd',
		position: 'User',
		isVerified: true,
		image: { org: User8 as StaticImageData, thumb: User8Thumb as StaticImageData },
		socialAuth: {
			google: false,
			facebook: false,
			apple: false,
		},
		twoFactorAuth: true,
	},
	semihraifgurel: {
		id: '9',
		username: 'semihraifgurel',
		firstName: 'Semih Raif',
		lastName: 'Gurel',
		email: 'semihraifgurel@site.com',
		password: '!123Asd',
		position: 'Administrator',
		isVerified: true,
		socialAuth: {
			google: false,
			facebook: false,
			apple: true,
		},
		twoFactorAuth: true,
	},
	patriciadionne: {
		id: '10',
		username: 'patriciadionne',
		firstName: 'Patricia',
		lastName: 'Dionne',
		email: 'patriciadionne@site.com',
		password: '!123Asd',
		position: 'User',
		isVerified: true,
		image: { org: User9 as StaticImageData, thumb: User9Thumb as StaticImageData },
		socialAuth: {
			google: true,
			facebook: true,
			apple: false,
		},
		twoFactorAuth: true,
	},
};

const usersDb: TUser[] = Object.values(usersDbList);

export default usersDb;
