import { TColors } from '@/types/colors.type';

type TStockKEY = 'IN' | 'OUT_OF' | 'LIMITED' | 'CRITICAL';
type TStockText = 'In Stock' | 'Out of Stock' | 'Limited Stock' | 'Critical Stock';

export type TStock = {
	text: TStockText;
	color: TColors;
};

type TStocks = {
	[key in TStockKEY]: TStock;
};

const STOCK: TStocks = {
	IN: {
		text: 'In Stock',
		color: 'emerald',
	},
	OUT_OF: {
		text: 'Out of Stock',
		color: 'red',
	},
	LIMITED: {
		text: 'Limited Stock',
		color: 'amber',
	},
	CRITICAL: {
		text: 'Critical Stock',
		color: 'violet',
	},
};

export default STOCK;
