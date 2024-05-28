type TTagKEY = 'new' | 'sale' | 'taxFree' | 'freeShipping' | string;
export type TTag = {
	id: string;
	name: string;
};

export const tagsDbList: { [key in TTagKEY]: TTag } = {
	new: { id: 'new', name: 'New' },
	sale: { id: 'sale', name: 'Sale' },
	taxFree: { id: 'taxFree', name: 'Tax Free' },
	freeShipping: { id: 'freeShipping', name: 'Free Shipping' },
};

const tagsDb: TTag[] = Object.values(tagsDbList);
export default tagsDb;
