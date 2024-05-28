import { TColors } from '@/types/colors.type';
import { StaticImageData } from 'next/image';

type TCategoryKEY =
	| 'technology'
	| 'shoes'
	| 'stationery'
	| 'glassware'
	| 'fashion'
	| 'watch'
	| string;
export type TCategory = {
	id: string;
	name: string;
	color: TColors;
	status: boolean;
	image?: string | StaticImageData;
};

export const categoriesDbList: { [key in TCategoryKEY]: TCategory } = {
	technology: { id: 'technology', name: 'Technology', color: 'amber', status: true },
	shoes: { id: 'shoes', name: 'Shoes', color: 'sky', status: true },
	stationery: { id: 'stationery', name: 'Stationery', color: 'lime', status: true },
	glassware: { id: 'glassware', name: 'Glassware', color: 'sky', status: true },
	fashion: { id: 'fashion', name: 'Fashion', color: 'emerald', status: false },
	watch: { id: 'watch', name: 'Watch', color: 'emerald', status: true },
};

const categoriesDb: TCategory[] = Object.values(categoriesDbList);
export default categoriesDb;
