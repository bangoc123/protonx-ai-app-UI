import { TIcons } from '@/types/icons.type';

export type TColumnData = { id: string; title: string; icon: TIcons };
type TColumnsData = {
	[key: string]: TColumnData;
};

export default TColumnsData;
