```tsx
import React, { createRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FullCalendar from '@fullcalendar/react';
import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';
import { DateSelectArg, EventApi, EventClickArg, EventContentArg } from '@fullcalendar/core';
import Calendar, { TViewMode, useCalendarView } from './components/Calendar';
import usersDb, { TUser } from './mocks/db/users.db';
import { TIcons } from './types/icons.type';
import Avatar from './components/Avatar';
import Card, { CardBody, CardHeader, CardHeaderChild } from './components/ui/Card';
import Button from './components/ui/Button';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from './components/ui/Dropdown';

const MyComponent = () => {
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
			id: '2',
			title: 'All-day event 2',
			start: dayjs().add(-8, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
			backgroundColor: colors.emerald['500'],
			borderColor: colors.emerald['500'],
		},
		{
			id: '3',
			title: 'All-day event 3',
			start: dayjs().add(-8, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
		},
		{
			id: '4',
			title: 'All-day event 4',
			start: dayjs().add(-6, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
			backgroundColor: colors.amber['500'],
			borderColor: colors.amber['500'],
		},
		{
			id: '5',
			title: 'All-day event 5',
			start: dayjs().add(-5, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[0] },
		},
		{
			id: '6',
			title: 'All-day event 6',
			start: dayjs().add(-3, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[3] },
		},
		{
			id: '7',
			title: 'All-day event 7',
			start: dayjs().add(4, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[2] },
			backgroundColor: colors.amber['500'],
			borderColor: colors.amber['500'],
		},
		{
			id: '8',
			title: 'All-day event 8',
			start: dayjs().add(4, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[5] },
		},
		{
			id: '9',
			title: 'All-day event 9',
			start: dayjs().startOf('week').add(6, 'day').format('YYYY-MM-DD'),
			end: dayjs().startOf('week').add(10, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[5] },
		},
		{
			id: '10',
			title: 'All-day event 10',
			start: dayjs().add(9, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[6] },
			backgroundColor: colors.purple['500'],
			borderColor: colors.purple['500'],
		},
		{
			id: '11',
			title: 'All-day event 11',
			start: dayjs().add(11, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[3] },
			backgroundColor: colors.emerald['500'],
			borderColor: colors.emerald['500'],
		},
		{
			id: '12',
			title: 'All-day event 12',
			start: dayjs().add(13, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[4] },
			backgroundColor: colors.orange['500'],
			borderColor: colors.orange['500'],
		},
		{
			id: '13',
			title: 'All-day event 13',
			start: dayjs().add(13, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[7] },
		},
		{
			id: '14',
			title: 'All-day event 14',
			start: dayjs().add(14, 'day').format('YYYY-MM-DD'),
			extendedProps: { user: usersDb[9] },
		},
		{
			id: '15',
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
				<CardHeaderChild>{currentDate}</CardHeaderChild>
				<CardHeaderChild>
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
					height={700}
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

export default MyComponent;
```
