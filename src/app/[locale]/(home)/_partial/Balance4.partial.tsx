import React from 'react';
import { TPeriod } from '@/constants/periods.constant';
import Card, { CardBody } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import Tooltip from '@/components/ui/Tooltip';
import Balance from '@/components/Balance';

const Balance4Partial = ({ activeTab }: { activeTab: TPeriod }) => {
	return (
		<Card>
			<CardBody>
				<div className='flex flex-col gap-2'>
					<div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-500'>
						<Icon icon='HeroTicket' size='text-3xl' className='text-white' />
					</div>
					<div className='space-x-1 text-zinc-500 rtl:space-x-reverse'>
						<span className='font-semibold'>Period: {activeTab.text} / Coupons</span>
						<Tooltip text='Distributed coupons.' />
					</div>
					<div className='text-4xl font-semibold'>86</div>
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

export default Balance4Partial;
