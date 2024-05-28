import React from 'react';
import { TPeriod } from '@/constants/periods.constant';
import Card, { CardBody } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import Tooltip from '@/components/ui/Tooltip';
import Balance from '@/components/Balance';

const Balance2Partial = ({ activeTab }: { activeTab: TPeriod }) => {
	return (
		<Card>
			<CardBody>
				<div className='flex flex-col gap-2'>
					<div className='flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500'>
						<Icon icon='HeroTrophy' size='text-3xl' className='text-white' />
					</div>
					<div className='space-x-1 text-zinc-500 rtl:space-x-reverse'>
						<span className='font-semibold'>Period: {activeTab.text} / Campaigns</span>
						<Tooltip text='Total ad campaigns.' />
					</div>
					<div className='text-4xl font-semibold'>325</div>
					<div className='flex'>
						<Balance status='negative' value='41%'>
							Balance
						</Balance>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Balance2Partial;
