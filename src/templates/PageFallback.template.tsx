import React from 'react';
import Header, { HeaderLeft, HeaderRight } from '@/components/layouts/Header/Header';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Container from '@/components/layouts/Container/Container';
import Card from '@/components/ui/Card';
import Mounted from '@/components/Mounted';

const PageFallbackTemplate = () => {
	return (
		<Mounted>
			<Header>
				<HeaderLeft>
					<div className='h-10 w-40 animate-pulse rounded-full bg-zinc-800/25 dark:bg-zinc-200/25' />
				</HeaderLeft>
				<HeaderRight>
					<div className='flex gap-4'>
						<div className='h-10 w-10 animate-pulse rounded-full bg-zinc-800/25 dark:bg-zinc-200/25' />
						<div className='h-10 w-10 animate-pulse rounded-full bg-zinc-800/25 dark:bg-zinc-200/25' />
						<div className='h-10 w-10 animate-pulse rounded-full bg-zinc-800/25 dark:bg-zinc-200/25' />
					</div>
				</HeaderRight>
			</Header>
			<PageWrapper>
				<Subheader>
					<SubheaderLeft>
						<div className='h-10 w-40 animate-pulse rounded-full bg-zinc-800/25 dark:bg-zinc-200/25' />
					</SubheaderLeft>
					<SubheaderRight>
						<div className='h-10 w-40 animate-pulse rounded-full bg-zinc-800/25 dark:bg-zinc-200/25' />
					</SubheaderRight>
				</Subheader>
				<Container>
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-3'>
							<Card className='h-[15vh] animate-pulse'>
								<div className='invisible'>Loading...</div>
							</Card>
						</div>
						<div className='col-span-3 '>
							<Card className='h-[15vh] animate-pulse'>
								<div className='invisible'>Loading...</div>
							</Card>
						</div>
						<div className='col-span-3'>
							<Card className='h-[15vh] animate-pulse'>
								<div className='invisible'>Loading...</div>
							</Card>
						</div>
						<div className='col-span-3'>
							<Card className='h-[15vh] animate-pulse'>
								<div className='invisible'>Loading...</div>
							</Card>
						</div>

						<div className='col-span-6'>
							<Card className='h-[50vh] animate-pulse'>
								<div className='invisible'>Loading...</div>
							</Card>
						</div>
						<div className='col-span-6'>
							<Card className='h-[50vh] animate-pulse'>
								<div className='invisible'>Loading...</div>
							</Card>
						</div>

						<div className='col-span-12'>
							<Card className='h-[15vh] animate-pulse'>
								<div className='invisible'>Loading...</div>
							</Card>
						</div>
					</div>
				</Container>
			</PageWrapper>
		</Mounted>
	);
};

export default PageFallbackTemplate;
