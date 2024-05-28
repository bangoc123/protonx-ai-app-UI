import { modulesDbList } from './modules.db';
import { TPermission } from '../../constants/permissions.constant';

export type TRole = {
	id: string;
	name: string;
	modules: { [key: string]: TPermission['value'] };
};

export const rolesDbList = {
	admin: {
		id: 'admin',
		name: 'Admin',
		modules: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	},
	user: {
		id: 'user',
		name: 'User',
		modules: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	},
	customer: {
		id: 'customer',
		name: 'Customer',
		modules: {
			[modulesDbList.customer.id]: 0 as TPermission['value'],
			[modulesDbList.product.id]: 4 as TPermission['value'],
			[modulesDbList.category.id]: 4 as TPermission['value'],
		},
	},
	management: {
		id: 'management',
		name: 'Management',
		modules: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	},
};

const rolesDb: TRole[] = Object.values(rolesDbList);

export default rolesDb;
