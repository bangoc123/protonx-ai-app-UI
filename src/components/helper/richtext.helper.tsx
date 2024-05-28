// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Editor, Element as SlateElement, Transforms } from 'slate';
import { useSlate } from 'slate-react';
import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Button from '../ui/Button';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

const isBlockActive = (editor, format, blockType = 'type') => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { selection } = editor;
	if (!selection) return false;

	const [match] = Array.from(
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		Editor.nodes(editor, {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			at: Editor.unhangRange(editor, selection),
			match: (n) =>
				!Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
		}),
	);

	return !!match;
};
export const toggleBlock = (editor, format) => {
	const isActive = isBlockActive(
		editor,
		format,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
	);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const isList = LIST_TYPES.includes(format);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	Transforms.unwrapNodes(editor, {
		match: (n) =>
			!Editor.isEditor(n) &&
			SlateElement.isElement(n) &&
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			LIST_TYPES.includes(n.type) &&
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			!TEXT_ALIGN_TYPES.includes(format),
		split: true,
	});
	let newProperties: Partial<SlateElement>;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	if (TEXT_ALIGN_TYPES.includes(format)) {
		newProperties = {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			align: isActive ? undefined : format,
		};
	} else {
		newProperties = {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,no-nested-ternary
			type: isActive ? 'paragraph' : isList ? 'list-item' : format,
		};
	}
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	Transforms.setNodes<SlateElement>(editor, newProperties);

	if (!isActive && isList) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const block = { type: format, children: [] };
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		Transforms.wrapNodes(editor, block);
	}
};

const isMarkActive = (editor, format) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const marks = Editor.marks(editor);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	return marks ? marks[format] === true : false;
};
export const toggleMark = (editor, format) => {
	const isActive = isMarkActive(editor, format);

	if (isActive) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		Editor.removeMark(editor, format);
	} else {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		Editor.addMark(editor, format, true);
	}
};

// eslint-disable-next-line react/prop-types
export const Element = ({ attributes, children, element }) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,react/prop-types
	const style = { textAlign: element.align };
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,react/prop-types
	switch (element.type) {
		case 'block-quote':
			return (
				<blockquote style={style} {...attributes}>
					{children}
				</blockquote>
			);
		case 'bulleted-list':
			return (
				<ul style={style} {...attributes}>
					{children}
				</ul>
			);
		case 'heading-one':
			return (
				<h1 style={style} {...attributes}>
					{children}
				</h1>
			);
		case 'heading-two':
			return (
				<h2 style={style} {...attributes}>
					{children}
				</h2>
			);
		case 'list-item':
			return (
				<li style={style} {...attributes}>
					{children}
				</li>
			);
		case 'numbered-list':
			return (
				<ol style={style} {...attributes}>
					{children}
				</ol>
			);
		default:
			return (
				<p style={style} {...attributes}>
					{children}
				</p>
			);
	}
};

// eslint-disable-next-line react/prop-types
export const Leaf = ({ attributes, children, leaf }) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,react/prop-types
	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,react/prop-types
	if (leaf.code) {
		children = <code>{children}</code>;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,react/prop-types
	if (leaf.italic) {
		children = <em>{children}</em>;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,react/prop-types
	if (leaf.underline) {
		children = <u>{children}</u>;
	}

	return <span {...attributes}>{children}</span>;
};

// eslint-disable-next-line react/prop-types
export const BlockButton = ({ format, icon }) => {
	const editor = useSlate();
	return (
		<Button
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			icon={icon}
			isActive={isBlockActive(
				editor,
				format,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
			)}
			onMouseDown={(event) => {
				event.preventDefault();
				toggleBlock(editor, format);
			}}
		/>
	);
};

// eslint-disable-next-line react/prop-types
export const MarkButton = ({ format, icon }) => {
	const editor = useSlate();
	return (
		<Button
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			icon={icon}
			isActive={isMarkActive(editor, format)}
			onMouseDown={(event) => {
				event.preventDefault();
				toggleMark(editor, format);
			}}
		/>
	);
};

// eslint-disable-next-line react/prop-types
export const Toolbar = ({ children }) => {
	return (
		<span className='flex items-center justify-between bg-zinc-100 dark:bg-zinc-800'>
			{children}
		</span>
	);
};

interface IToolbarChildProps {
	children: ReactNode;
	className?: string;
}
export const ToolbarChild: FC<IToolbarChildProps> = ({ children, className }) => {
	return <span className={classNames('flex items-center', className)}>{children}</span>;
};
