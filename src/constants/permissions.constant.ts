export type TPermissionKEY = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TPermission = {
	value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
	read: boolean;
	write: boolean;
	execute: boolean;
	desc: string;
};
type TPermissions = {
	[key in TPermissionKEY]: TPermission;
};

const PERMISSION: TPermissions = {
	0: {
		value: 0,
		read: false,
		write: false,
		execute: false,
		desc: 'No permission.',
	},
	1: {
		value: 1,
		read: false,
		write: false,
		execute: true,
		desc: 'Only execute permission.',
	},
	2: {
		value: 2,
		read: false,
		write: true,
		execute: false,
		desc: 'Only write permission.',
	},
	3: {
		value: 3,
		read: false,
		write: true,
		execute: true,
		desc: 'Write and execute permissions.',
	},
	4: {
		value: 4,
		read: true,
		write: false,
		execute: false,
		desc: 'Only read permission.',
	},
	5: {
		value: 5,
		read: true,
		write: false,
		execute: true,
		desc: 'Read and execute permission.',
	},
	6: {
		value: 6,
		read: true,
		write: true,
		execute: false,
		desc: 'Read and write permissions.',
	},
	7: {
		value: 7,
		read: true,
		write: true,
		execute: true,
		desc: 'Read, write, and execute permission.',
	},
};
export default PERMISSION;
