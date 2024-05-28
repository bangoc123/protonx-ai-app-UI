import React from 'react';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Timeline, { TimelineItem } from '@/components/Timeline';
import { Image1Thumb, Image3Thumb, Image5Thumb } from '@/assets/images';
import Icon from '@/components/icon/Icon';
import Alert from '@/components/ui/Alert';
import priceFormat from '@/utils/priceFormat.util';
import { StaticImageData } from 'next/image';

const TimelinePartial = () => {
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Timeline</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='h-96 overflow-scroll'>
				<Timeline>
					<TimelineItem icon='HeroRocketLaunch'>
						You have <b>52 open refund requests</b> to action. This includes{' '}
						<b>8 new requests</b>.
					</TimelineItem>
					<TimelineItem image={Image1Thumb as StaticImageData}>
						1 order was placed from Italy. <b>#3267</b>
					</TimelineItem>
					<TimelineItem image={Image1Thumb as StaticImageData}>
						1 order was placed from France. <b>#3266</b>
					</TimelineItem>
					<TimelineItem image={Image3Thumb as StaticImageData}>
						1 order was placed from France. <b>#3265</b>
					</TimelineItem>
					<TimelineItem icon='HeroExclamationCircle' color='red'>
						<b>#3244</b> payment transactions not confirmed by the bank
					</TimelineItem>
					<TimelineItem image={Image5Thumb as StaticImageData}>
						<div className='flex items-center'>
							<Icon icon='HeroStar' color='amber' />
							<Icon icon='HeroStar' color='amber' />
							<Icon icon='HeroStar' color='amber' />
							<Icon icon='HeroStar' color='amber' />
							<Icon icon='HeroStar' />
							<div className='ltr:ml-2 rtl:mr-2'>stars awarded.</div>
						</div>
					</TimelineItem>
					<TimelineItem icon='HeroRocketLaunch'>
						42 items sent. There are 59 orders expected to be paid.
					</TimelineItem>
					<TimelineItem icon='HeroBanknotes' color='emerald'>
						<div>
							{priceFormat(1247)} was received from the bank to the company account.
						</div>
						<Alert color='emerald' variant='outline' className='border-transparent'>
							Payoneer: <b>{priceFormat(1247)}</b>
						</Alert>
					</TimelineItem>
					<TimelineItem icon='HeroRocketLaunch'>
						You have <b>52 open refund requests</b> to action. This includes{' '}
						<b>8 new requests</b>.
					</TimelineItem>
					<TimelineItem image={Image1Thumb as StaticImageData}>
						1 order was placed from Italy. <b>#3267</b>
					</TimelineItem>
					<TimelineItem image={Image1Thumb as StaticImageData}>
						1 order was placed from France. <b>#3266</b>
					</TimelineItem>
					<TimelineItem image={Image3Thumb as StaticImageData}>
						1 order was placed from France. <b>#3265</b>
					</TimelineItem>
					<TimelineItem icon='HeroExclamationCircle' color='red'>
						<b>#3244</b> payment transactions not confirmed by the bank
					</TimelineItem>
					<TimelineItem image={Image5Thumb as StaticImageData}>
						<div className='flex items-center'>
							<Icon icon='HeroStar' color='amber' />
							<Icon icon='HeroStar' color='amber' />
							<Icon icon='HeroStar' color='amber' />
							<Icon icon='HeroStar' color='amber' />
							<Icon icon='HeroStar' />
							<div className='ltr:ml-2 rtl:mr-2'>stars awarded.</div>
						</div>
					</TimelineItem>
					<TimelineItem icon='HeroRocketLaunch'>
						42 items sent. There are 59 orders expected to be paid.
					</TimelineItem>
					<TimelineItem icon='HeroBanknotes' color='emerald'>
						<div>
							{priceFormat(1247)} was received from the bank to the company account.
						</div>
						<Alert color='emerald' variant='outline' className='border-transparent'>
							Payoneer: <b>{priceFormat(1247)}</b>
						</Alert>
					</TimelineItem>
				</Timeline>
			</CardBody>
		</Card>
	);
};

export default TimelinePartial;
