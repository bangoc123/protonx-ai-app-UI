import React from 'react';
import classNames from 'classnames';
import Card, { CardBody } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import themeConfig from '@/config/theme.config';

const Mini5Partial = () => {
	return (
		<Card
			className={classNames(
				'group/item h-full hover:!bg-blue-500/10',
				themeConfig.transition,
			)}>
			<CardBody>
				<div className='flex items-center gap-4'>
					<div className='flex-shrink-0'>
						<div
							className={classNames(
								'rounded-full bg-blue-500/10 p-4 group-hover/item:bg-transparent',
								themeConfig.transition,
							)}>
							<Icon
								icon='HeroBellAlert'
								size='text-5xl'
								color={themeConfig.themeColor}
							/>
						</div>
					</div>
					<div className='flex grow items-center'>
						<div>
							<div className='text-zinc-500'>Notifications</div>
							<div className='text-3xl font-semibold'>3/22</div>
						</div>
					</div>
					<div className='flex flex-shrink-0 items-center'>
						<div
							className={classNames(
								'invisible group-hover/item:visible',
								themeConfig.transition,
							)}>
							<div className='cursor-pointer rounded-full px-4 py-2 text-inherit text-zinc-500 hover:bg-blue-500/25'>
								Click!
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Mini5Partial;
