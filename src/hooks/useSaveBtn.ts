import { TSaveBtnStatusValue } from '@/types/common/saveBtn.type';
import { TColors } from '@/types/colors.type';
import SAVE_BTN_STATUS from '../constants/common/saveBtn.constant';

const useSaveBtn = ({
	isNewItem,
	isSaving,
	isDirty,
}: {
	isNewItem: boolean;
	isSaving: boolean;
	isDirty: boolean;
}) => {
	const textFn = () => {
		if (isSaving) return SAVE_BTN_STATUS.SAVING;
		if (!isSaving && isNewItem) return SAVE_BTN_STATUS.PUBLISH;
		if (!isSaving && !isNewItem && !isDirty) return SAVE_BTN_STATUS.SAVED;
		return SAVE_BTN_STATUS.SAVE;
	};
	const saveBtnText: TSaveBtnStatusValue = textFn();

	const colorFn = () => {
		if (isSaving) return 'blue';
		if (!isSaving && isNewItem) return 'emerald';
		if (!isSaving && !isNewItem && !isDirty) return 'blue';
		return 'blue';
	};
	const saveBtnColor: TColors = colorFn();

	const saveBtnDisable: boolean = !isNewItem && !isDirty;

	return { saveBtnText, saveBtnColor, saveBtnDisable };
};
export default useSaveBtn;
