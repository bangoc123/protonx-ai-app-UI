import React from 'react';
import Card, { CardBody } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import themeConfig from '@/config/theme.config';

const Mini1Partial = () => {
	return (
		<Card className='h-full'>
			<CardBody>
				<div className='flex items-center gap-4'>
					<div className='flex-shrink-0'>
						<div className='rounded-full bg-blue-500/10 p-4'>
							<Icon
								icon='HeroUserGroup'
								size='text-5xl'
								color={themeConfig.themeColor}
							/>
						</div>
					</div>
					<div className='flex grow items-center'>
						<div>
							<div className='text-zinc-500'>Total Users</div>
							<div className='text-3xl font-semibold'>1352</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Mini1Partial;
