import React, {
	Dispatch,
	FC,
	HTMLAttributes,
	SetStateAction,
	useCallback,
	useMemo,
	useState,
} from 'react';
import isHotkey from 'is-hotkey';
import { Editable, Slate, withReact } from 'slate-react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import classNames from 'classnames';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import { TRounded } from '@/types/rounded.type';
import themeConfig from '../config/theme.config';
import Button from './ui/Button';
import {
	BlockButton,
	Element,
	Leaf,
	MarkButton,
	toggleMark,
	Toolbar,
	ToolbarChild,
} from './helper/richtext.helper';

const HOTKEYS = {
	'mod+b': 'bold',
	'mod+i': 'italic',
	'mod+u': 'underline',
	'mod+`': 'code',
};

const initialValue = [
	{
		type: 'paragraph',
		children: [{ text: '' }],
	},
];

export type TRichTextVariants = 'solid';

interface IRichTextProps extends HTMLAttributes<HTMLDivElement> {
	borderWidth?: TBorderWidth;
	className?: string;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	invalidFeedback?: string;
	isTouched?: boolean;
	isValid?: boolean;
	isValidMessage?: boolean;
	validFeedback?: string;
	rounded?: TRounded;
	variant?: TRichTextVariants;
	value: Descendant[] | [];
	handleChange: Dispatch<SetStateAction<Descendant[] | []>>;
	placeholder?: string;
}
const RichText: FC<IRichTextProps> = (props) => {
	const {
		borderWidth = themeConfig.borderWidth,
		className,
		color = themeConfig.themeColor,
		colorIntensity = themeConfig.themeColorShade,
		invalidFeedback,
		isTouched = false,
		isValid = false,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage = true,
		rounded = themeConfig.rounded,
		validFeedback,
		variant = 'solid',
		value,
		handleChange,
		placeholder = 'Enter some rich text…',
		...rest
	} = props;

	const [isFocused, setIsFocused] = useState<boolean>(false);

	const richTextVariants: {
		[key in TRichTextVariants]: {
			general: string;
			validation: string;
		};
	} = {
		solid: {
			general: classNames(
				// Default
				[`${borderWidth}`],
				{
					'border-zinc-100 dark:border-zinc-800': !isFocused,
					'bg-zinc-100 dark:bg-zinc-800': !isFocused,
				},
				// Hover
				{
					[`hover:border-${color}-${colorIntensity}`]: !isFocused,
					[`dark:hover:border-${color}-${colorIntensity}`]: !isFocused,
				},
				// Focus
				{
					'border-zinc-300 dark:border-zinc-800': isFocused,
					'bg-transparent dark:bg-transparent': isFocused,
				},
			),
			validation: classNames({
				'!border-red-500 ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'!border-green-500 focus:ring-4 focus:ring-green-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
	};
	const richTextVariantClasses = richTextVariants[variant as TRichTextVariants].general;

	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-shadow
	const renderElement = useCallback((props) => <Element {...props} />, []);
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-shadow
	const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
	const editor = useMemo(() => withHistory(withReact(createEditor())), []);

	// console.log(JSON.stringify(state), JSON.parse(JSON.stringify(state)));

	return (
		<div
			data-component-name='RichText'
			className={classNames(
				'w-full appearance-none overflow-hidden outline-0',
				themeConfig.transition,
				rounded,
				richTextVariantClasses,
				className,
			)}
			{...rest}>
			<style>{`
			[data-slate-editor] :is(ol, ul) {list-style-position: inside;} 
			[data-slate-editor] ul li {list-style-type: disc;} 
			[data-slate-editor] ol li {list-style-type: numeric;} 
			[data-slate-editor] blockquote {font-style: italic; font-size: 110%; opacity: 0.9; border-left: 2px solid; padding-left: 0.5rem}
			`}</style>
			<Slate
				editor={editor}
				initialValue={!value.length ? initialValue : value}
				onChange={handleChange}>
				<Toolbar>
					<ToolbarChild className='flex-wrap'>
						<MarkButton format='bold' icon='DuoBold' />
						<MarkButton format='italic' icon='DuoItalic' />
						<MarkButton format='underline' icon='DuoUnderline' />
						<MarkButton format='code' icon='DuoCode1' />
						<BlockButton format='heading-one' icon='DuoH1' />
						<BlockButton format='heading-two' icon='DuoH2' />
						<BlockButton format='block-quote' icon='DuoQuote1' />
						<BlockButton format='numbered-list' icon='DuoBulletList' />
						<BlockButton format='bulleted-list' icon='DuoBulletList' />
						<BlockButton format='left' icon='DuoAlignLeft' />
						<BlockButton format='center' icon='DuoAlignCenter' />
						<BlockButton format='right' icon='DuoAlignRight' />
						<BlockButton format='justify' icon='DuoAlignJustify' />
					</ToolbarChild>
					<ToolbarChild>
						<Button
							icon='DuoReply'
							onMouseDown={() => {
								editor.undo();
							}}
							isDisable={!editor.history.undos.length}
						/>
						<Button
							icon='DuoRedo'
							onMouseDown={() => {
								editor.redo();
							}}
							isDisable={!editor.history.redos.length}
						/>
					</ToolbarChild>
				</Toolbar>
				<Editable
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					placeholder={placeholder}
					spellCheck
					onKeyDown={(event) => {
						// eslint-disable-next-line no-restricted-syntax
						for (const hotkey in HOTKEYS) {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
							if (isHotkey(hotkey, event as never)) {
								event.preventDefault();
								// @ts-ignore
								// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
								const mark = HOTKEYS[hotkey];
								toggleMark(editor, mark);
							}
						}
					}}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					className='p-4 outline-0'
				/>
			</Slate>
		</div>
	);
};

export default RichText;
