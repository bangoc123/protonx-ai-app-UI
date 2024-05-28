import React, { FC, useState } from 'react';
import Button from '@/components/ui/Button';
import MdViewer from '@/components/MdViewer';
import ButtonGroup from '@/components/ui/ButtonGroup';

interface IJdPreviewCommonProps {
	sequences: IJd[];
}
const JdPreviewCommon: FC<IJdPreviewCommonProps> = ({ sequences }) => {
	const [selectedSequenceId, setSelectedSequenceId] = useState<string>(sequences?.[0]?._id || '');
	const selectSequenceOnClick = (sequence: IJd) => {
		setSelectedSequenceId(sequence?._id);
	};

	const generateSequenceContent = (sequenceId: string) => {
		let content = <div>No content</div>;
		if (sequenceId) {
			const sequence = sequences?.find((item) => item._id === sequenceId);
			if (sequence && sequence?.content) {
				content = <MdViewer mdFile={sequence?.content} className='whitespace-pre-wrap' />;
			}
		}
		return content;
	};
	return (
		<div>
			<div>
				<div className='mb-4 flex justify-center'>
					<ButtonGroup>
						{sequences?.map((sequence, index) => {
							return (
								<Button
									variant={
										selectedSequenceId === sequence?._id ? 'solid' : 'default'
									}
									key={sequence?._id}
									onClick={() => selectSequenceOnClick(sequence)}
									color='blue'>
									{index + 1}
								</Button>
							);
						})}
					</ButtonGroup>
				</div>
				{generateSequenceContent(selectedSequenceId)}
			</div>
		</div>
	);
};

export default JdPreviewCommon;
