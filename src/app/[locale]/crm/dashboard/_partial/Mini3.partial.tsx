import React from 'react';
import Card, { CardBody } from '@/components/ui/Card';
import { BalanceIcon } from '@/components/Balance';
import priceFormat from '@/utils/priceFormat.util';

const Mini3Partial = () => {
	return (
		<Card className='h-full'>
			<CardBody>
				<div className='flex items-center gap-4'>
					<div className='flex grow items-center'>
						<div>
							<div className='text-zinc-500'>Budget</div>
							<div className='text-3xl font-semibold'>{priceFormat(2400)}</div>
							<div className='flex items-center gap-2 text-sm text-zinc-500'>
								<span>since last month</span>
								<span className='text-emerald-500'>23%</span>
								<BalanceIcon status='positive' />
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Mini3Partial;
