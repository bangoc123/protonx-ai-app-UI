import React from 'react';
import Card, { CardBody } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import themeConfig from '@/config/theme.config';
import Badge from '@/components/ui/Badge';

const Mini6Partial = () => {
	return (
		<Card className='h-full'>
			<CardBody>
				<div className='flex items-center gap-4'>
					<div className='flex-shrink-0'>
						<div className='rounded-full bg-blue-500/10 p-4'>
							<Icon
								icon='HeroRocketLaunch'
								size='text-5xl'
								color={themeConfig.themeColor}
							/>
						</div>
					</div>
					<div className='flex grow flex-wrap gap-2'>
						<Badge color='blue' variant='outline' className='border-transparent'>
							Design
						</Badge>
						<Badge color='amber' variant='outline' className='border-transparent'>
							Code
						</Badge>
						<Badge color='emerald' variant='outline' className='border-transparent'>
							Dev
						</Badge>
						<Badge color='violet' variant='outline' className='!border-transparent'>
							Test
						</Badge>
						<Badge color='lime' variant='outline' className='border-transparent'>
							Run
						</Badge>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Mini6Partial;
