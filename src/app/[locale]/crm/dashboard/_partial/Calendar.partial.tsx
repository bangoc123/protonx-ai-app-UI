'use client';

import React, { createRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { useTranslation } from 'react-i18next';
import { DateSelectArg, EventApi, EventClickArg, EventContentArg } from '@fullcalendar/core';
import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Calendar, { TViewMode, useCalendarView } from '@/components/Calendar';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import { TIcons } from '@/types/icons.type';
import usersDb, { TUser } from '@/mocks/db/users.db';
import Avatar from '@/components/Avatar';
import Image from 'next/image';

const CalendarPartial = ({ height }: { height?: string | number }) => {
	const { t } = useTranslation();

	const ref = createRef<FullCalendar>();
	const {
		viewMode,
		changeViewMode,
		next,
		prev,
		today,
		title: currentDate,
	} = useCalendarView(ref);

	const INITIAL_EVENTS = [
		{
			id: '1',
			title: 'All-day event 1',
			start: dayjs().add(-9, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
		},
		{
			id: '1',
			title: 'All-day event 1',
			start: dayjs().add(-8, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
			backgroundColor: colors.emerald['500'],
			borderColor: colors.emerald['500'],
		},
		{
			id: '1',
			title: 'All-day event 1',
			start: dayjs().add(-8, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
		},
		{
			id: '1',
			title: 'All-day event 1',
			start: dayjs().add(-6, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
			backgroundColor: colors.amber['500'],
			borderColor: colors.amber['500'],
		},
		{
			id: '1',
			title: 'All-day event 1',
			start: dayjs().add(-5, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
		},
		{
			id: '2',
			title: 'All-day event 2',
			start: dayjs().add(-3, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[3] },
		},
		{
			id: '3',
			title: 'All-day event 3',
			start: dayjs().add(4, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[2] },
			backgroundColor: colors.amber['500'],
			borderColor: colors.amber['500'],
		},
		{
			id: '4',
			title: 'All-day event 4',
			start: dayjs().add(4, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[5] },
		},
		{
			id: '4',
			title: 'All-day event 4',
			start: dayjs().add(6, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[5] },
		},
		{
			id: '5',
			title: 'All-day event 5',
			start: dayjs().add(9, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[6] },
			backgroundColor: colors.purple['500'],
			borderColor: colors.purple['500'],
		},
		{
			id: '6',
			title: 'All-day event 6',
			start: dayjs().add(11, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[3] },
			backgroundColor: colors.emerald['500'],
			borderColor: colors.emerald['500'],
		},
		{
			id: '7',
			title: 'All-day event 7',
			start: dayjs().add(13, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[4] },
			backgroundColor: colors.orange['500'],
			borderColor: colors.orange['500'],
		},
		{
			id: '8',
			title: 'All-day event 8',
			start: dayjs().add(13, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[7] },
		},
		{
			id: '9',
			title: 'All-day event 9',
			start: dayjs().add(14, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[9] },
		},
		{
			id: '10',
			title: 'Timed event',
			start: dayjs().startOf('hour').valueOf(),
			end: dayjs().startOf('hour').add(2, 'hour').valueOf(),
			extendedProps: { user: usersDb[0] },
		},
	];

	const CALENDAR_VIEW: {
		[key in TViewMode]: { key: TViewMode; text: string; icon: TIcons };
	} = {
		timeGridDay: { key: 'timeGridDay', text: 'Day', icon: 'HeroCalendar' },
		timeGridWeek: { key: 'timeGridWeek', text: 'Week', icon: 'HeroTableCells' },
		dayGridMonth: { key: 'dayGridMonth', text: 'Month', icon: 'HeroCalendarDays' },
		listWeek: { key: 'listWeek', text: 'List', icon: 'HeroClipboardDocumentCheck' },
	};

	const handleDateSelect = (selectInfo: DateSelectArg) => {
		// eslint-disable-next-line no-alert
		const title = prompt('Please enter a new title for your event');
		const calendarApi = selectInfo.view.calendar;

		calendarApi.unselect(); // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: title,
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	};

	const handleEventClick = (clickInfo: EventClickArg) => {
		// eslint-disable-next-line no-restricted-globals,no-alert
		if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
			clickInfo.event.remove();
		}
	};

	const renderEventContent = (eventContent: EventContentArg) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { user, ...rest }: { user?: TUser } = eventContent.event.extendedProps;

		return (
			<>
				{user && <Avatar src={user.image?.thumb} className='me-2 w-6' />}
				<i className='pe-2'>{eventContent.event.title}</i>
				{eventContent.timeText && <b>{eventContent.timeText}</b>}
			</>
		);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

	const handleEvents = (events: EventApi[]) => {
		setCurrentEvents(events);
	};

	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<div className='flex -space-x-2 overflow-hidden'>
						<Image
							src={usersDb[0].image?.thumb as string}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[1].image?.thumb as string}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[2].image?.thumb as string}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
						<Image
							src={usersDb[3].image?.thumb as string}
							alt='User 1'
							className='inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900'
						/>
					</div>
					<CardTitle>Tasks</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Button>{currentDate}</Button>
					<Button onClick={() => prev(true)} icon='HeroChevronDoubleLeft' />
					<Button onClick={() => prev()} icon='HeroChevronLeft' />
					<Button onClick={() => today()} icon='HeroCalendar' />
					<Button onClick={() => next()} icon='HeroChevronRight' />
					<Button onClick={() => next(true)} icon='HeroChevronDoubleRight' />
					<Dropdown>
						<DropdownToggle>
							<Button color='zinc' icon={CALENDAR_VIEW[viewMode].icon}>
								{t(CALENDAR_VIEW[viewMode].text)}
							</Button>
						</DropdownToggle>
						<DropdownMenu placement='bottom-end'>
							{Object.values(CALENDAR_VIEW).map((item) => (
								<DropdownItem
									key={item.key}
									isActive={viewMode === item.key}
									onClick={() => changeViewMode(item.key)}
									icon={item.icon}>
									{item.text}
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<Calendar
					ref={ref}
					height={height}
					viewMode={viewMode}
					initialEvents={INITIAL_EVENTS}
					editable
					selectable
					selectMirror
					dayMaxEvents={3}
					select={handleDateSelect}
					eventContent={renderEventContent}
					eventClick={handleEventClick}
					eventsSet={handleEvents}
					eventClassNames='truncate'
				/>
			</CardBody>
		</Card>
	);
};
CalendarPartial.defaultProps = {
	height: 400,
};

export default CalendarPartial;
