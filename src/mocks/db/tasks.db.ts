import { StaticImageData } from 'next/image';
import { Image20Thumb, Image21Thumb, Image22Thumb } from '../../assets/images';
import { TUser, usersDbList } from './users.db';

export type TTask = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	comments?: {
		id: string | number;
		text: string;
		user: TUser;
	}[];
	label: string;
	items: { status: boolean; id: string | number; text: string }[];
	attachments?: { id: string | number; file: string; path: string }[];
	img?: string | StaticImageData;
	user: TUser;
};
export type TTasks = {
	[key: string]: TTask[];
};

const tasksDb: TTasks = {
	column1: [
		{
			id: '6',
			title: 'Mail App',
			subtitle: 'Fyr Themes',
			description:
				'[{"type":"paragraph","children":[{"text":"Mail application and screens will be added"}]}]',
			label: '7 day left',
			comments: [
				{
					id: 1,
					text: '[{"type":"paragraph","children":[{"text":"The design looks beautiful. 😎"}]}]',
					user: usersDbList.scottnewton,
				},
				{
					id: 2,
					text: `[{"type":"paragraph","children":[{"text":"Thanks 😎"}]}]`,
					user: usersDbList.jeanetteneufville,
				},
			],
			items: [
				{ id: 1, text: 'Page UI & UX design', status: true },
				{ id: 2, text: 'HTML & SCSS coding', status: true },
				{ id: 3, text: 'React Components to do', status: false },
			],
			attachments: [
				{ id: 1, path: 'somefile.txt', file: 'TXT' },
				{ id: 2, path: 'somefile.txt', file: 'WORD' },
				{ id: 3, path: 'somefile.txt', file: 'PSD' },
			],
			img: Image20Thumb as StaticImageData,
			user: usersDbList.jeanetteneufville,
		},
		{
			id: '5',
			title: 'Invoice',
			subtitle: 'Fyr Themes',
			description:
				'[{"type":"paragraph","children":[{"text":"Invoice preview and new creation screens will be added"}]}]',
			label: '5 day left',
			items: [
				{ id: 1, text: 'Lorem ipsum dolor', status: true },
				{ id: 2, text: 'Sit amet.', status: false },
			],
			user: usersDbList.patriciadionne,
		},
	],
	column2: [
		{
			id: '4',
			title: 'Landing Page Update',
			subtitle: 'Omtanke Team',
			description: '[{"type":"paragraph","children":[{"text":"Will be redesigned"}]}]',
			label: '5 day left',
			items: [
				{ id: 1, text: 'Draft drawings will be made', status: true },
				{ id: 2, text: 'Page will be updated', status: false },
				{ id: 3, text: 'Will be sent for review.', status: false },
			],
			attachments: [{ id: 2, path: 'somefile.txt', file: 'WORD' }],
			user: usersDbList.jakecorbin,
		},
		{
			id: '3',
			title: 'Write Blog',
			subtitle: 'Fyr Themes',
			description:
				'[{"type":"paragraph","children":[{"text":"Explain why it should be chosen"}]}]',
			label: '7 day left',
			items: [{ id: 1, text: 'Lorem ipsum dolor', status: true }],
			attachments: [{ id: 1, path: 'somefile.txt', file: 'TXT' }],
			img: Image21Thumb as StaticImageData,
			user: usersDbList.aulistiainen,
		},
	],
	column3: [],
	column4: [
		{
			id: '2',
			title: 'Bug Fix',
			subtitle: 'Fyr Themes',
			description: '[{"type":"paragraph","children":[{"text":"Minor bugs will be fixed"}]}]',
			label: '5 day left',
			items: [
				{ id: 1, text: 'Lorem ipsum dolor', status: true },
				{ id: 2, text: 'Sit amet.', status: false },
				{ id: 3, text: 'Aliquam quis varius turpis.', status: false },
			],
			attachments: [
				{ id: 1, path: 'somefile.txt', file: 'TXT' },
				{ id: 2, path: 'somefile.txt', file: 'WORD' },
				{ id: 3, path: 'somefile.txt', file: 'PSD' },
			],
			user: usersDbList.aulistiainen,
		},
	],
	column5: [
		{
			id: '1',
			title: 'Project App',
			subtitle: 'Fyr Themes',
			description:
				'[{"type":"paragraph","children":[{"text":"Project tracking screen will be added"}]}]',
			label: '1 day ago',
			items: [
				{ id: 1, text: 'Lorem ipsum dolor', status: true },
				{ id: 2, text: 'Sit amet.', status: false },
				{ id: 3, text: 'Aliquam quis varius turpis.', status: false },
			],
			attachments: [
				{ id: 1, path: 'somefile.txt', file: 'TXT' },
				{ id: 2, path: 'somefile.txt', file: 'WORD' },
				{ id: 3, path: 'somefile.txt', file: 'PSD' },
			],
			img: Image22Thumb as StaticImageData,
			user: usersDbList.scottnewton,
		},
	],
};

export default tasksDb;
