export type TSaveBtnStatusValue = 'Publish' | 'Save' | 'Saving' | 'Saved';
export type TSaveBtnStatus = {
	[key in 'PUBLISH' | 'SAVE' | 'SAVING' | 'SAVED']: TSaveBtnStatusValue;
};
