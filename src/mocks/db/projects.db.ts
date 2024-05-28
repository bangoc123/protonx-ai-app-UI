import dayjs, { Dayjs } from 'dayjs';
import { StaticImageData } from 'next/image';
import usersDb, { TUser } from './users.db';
import {
	Image19Thumb,
	Image20Thumb,
	Image21Thumb,
	Image22Thumb,
	Image23Thumb,
	Image24Thumb,
	Image25Thumb,
	Image26Thumb,
} from '../../assets/images';

export type TProject = {
	id: string;
	status: string;
	name: string;
	description: string;
	dueDate?: Dayjs | string | number;
	image?: string | string[] | StaticImageData | StaticImageData[];
	users?: TUser[];
	comments?: {
		id: string;
		user: TUser;
		comment: string;
	}[];
};

const projectsDb: TProject[] = [
	{
		id: '1',
		status: 'backlog',
		name: 'More Apps',
		description: '4 different applications will be added to the project.',
		dueDate: dayjs().add(12, 'day'),
		users: [usersDb[0], usersDb[1], usersDb[2], usersDb[3]],
		image: [Image19Thumb, Image20Thumb, Image21Thumb, Image22Thumb],
		comments: [
			{
				id: '1',
				user: usersDb[0],
				comment: 'This is perfect',
			},
			{
				id: '2',
				user: usersDb[1],
				comment: 'Thanks',
			},
		],
	},
	{
		id: '2',
		status: 'backlog',
		name: 'Presentation',
		description: 'Landing page wireframe will be prepared.',
		users: [usersDb[2], usersDb[3], usersDb[4], usersDb[5], usersDb[6], usersDb[7]],
		image: [Image22Thumb],
	},
	{
		id: '3',
		status: 'inProgress',
		name: 'Education Dashboard',
		description:
			'Screens on which online courses will be published and sold will be designed and added.',
		users: [usersDb[7], usersDb[9]],
		image: [Image26Thumb],
	},
	{
		id: '4',
		status: 'inProgress',
		name: 'Education Pages',
		description:
			'Screens on which online courses will be published and sold will be designed and added.',
		users: [usersDb[2], usersDb[3], usersDb[4], usersDb[5], usersDb[7], usersDb[8]],
		image: [Image23Thumb, Image24Thumb, Image25Thumb, Image26Thumb],
	},

	{
		id: '5',
		status: 'completed',
		name: 'Sales App',
		description: '4 different applications will be added to the project.',
		dueDate: dayjs().add(12, 'day'),
		users: [usersDb[4], usersDb[5], usersDb[6]],
		image: [Image19Thumb],
		comments: [
			{
				id: '1',
				user: usersDb[0],
				comment: 'This is perfect',
			},
			{
				id: '2',
				user: usersDb[1],
				comment: 'Thanks',
			},
		],
	},
];

export default projectsDb;
