import React, { forwardRef, RefObject, useEffect, useState } from 'react';
import _ from 'lodash';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import {
	CalendarOptions,
	LocaleInput,
	LocaleSingularArg,
	PluginDef,
	ToolbarInput,
} from '@fullcalendar/core';
import colors from 'tailwindcss/colors';
import theme from 'tailwindcss/defaultTheme';
import trLocale from '@fullcalendar/core/locales/tr';
import arLocale from '@fullcalendar/core/locales/ar';
import { useTranslation } from 'react-i18next';
import themeConfig from '../config/theme.config';

export type TViewMode = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek' | string;

interface ICalendarProps extends Partial<CalendarOptions> {
	viewMode?: TViewMode;
	plugins?: PluginDef[];
	headerToolbar?: ToolbarInput;
	eventColor?: string;
	locale?: LocaleSingularArg;
	locales?: LocaleInput[];
}
const Calendar = forwardRef<FullCalendar, ICalendarProps>((props, ref) => {
	const {
		plugins,
		viewMode = 'dayGridMonth',
		headerToolbar,
		eventColor = colors[themeConfig.themeColor][themeConfig.themeColorShade],
		locale,
		locales,
		...rest
	} = props;

	const { i18n } = useTranslation();

	return (
		<>
			<style>{`
				.fc-header-toolbar.fc-toolbar {
					${typeof headerToolbar === 'undefined' ? 'margin: 0 !important' : ''}
				}
				.fc-event.fc-daygrid-event {
					border-radius: 100px;
				}
				.fc-event-main {
					display: flex;
					align-items: center;
				}
				table.fc-scrollgrid {
					border-radius: ${theme.borderRadius.md};
					border-bottom-width: 1px !important;
					border-right-width: 1px !important;
					overflow: hidden;
				}
				.fc-list {
					border-radius: ${theme.borderRadius.md};
					overflow: hidden;
				}
				tr.fc-scrollgrid-section > th {
					border-right-width: 0px !important;
				}
				tr.fc-scrollgrid-section > td {
					border-bottom-width: 0px;
					border-right-width: 0px;
				} 
				:root {
					--fc-border-color:${colors.zinc['500']}50;
					--fc-today-bg-color:${colors.blue['500']}20;
					--fc-neutral-bg-color:${colors.blue['500']};
					--fc-list-event-hover-bg-color:${colors.blue['700']};
			
			`}</style>
			<FullCalendar
				locale={locale || i18n.language}
				locales={_.merge([trLocale, arLocale], locales)}
				ref={ref}
				plugins={_.merge(
					[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
					plugins,
				)}
				initialView={viewMode}
				headerToolbar={_.merge(
					{
						start: '',
						center: '',
						end: '',
					},
					headerToolbar,
				)}
				eventColor={eventColor}
				{...rest}
			/>
		</>
	);
});
Calendar.displayName = 'Calendar';

export const useCalendarView = (ref: RefObject<FullCalendar>) => {
	const [viewMode, setViewMode] = useState<TViewMode>('dayGridMonth');

	const changeViewMode = (newViewMode: TViewMode) => {
		const calendarApi = ref?.current?.getApi();
		calendarApi?.changeView(newViewMode);
		calendarApi?.changeView(newViewMode);
		setViewMode(newViewMode);
	};

	const next = (isYear = false) => {
		const calendarApi = ref?.current?.getApi();
		if (isYear) return calendarApi?.nextYear();
		return calendarApi?.next();
	};

	const prev = (isYear = false) => {
		const calendarApi = ref?.current?.getApi();
		if (isYear) return calendarApi?.prevYear();
		return calendarApi?.prev();
	};

	const today = () => {
		const calendarApi = ref?.current?.getApi();
		return calendarApi?.today();
	};

	const [title, setTitle] = useState<string | null>(null);
	useEffect(() => {
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		setTitle(ref?.current?.calendar?.currentData.viewTitle as string);
		return () => {};
	}, [ref]);

	return { viewMode, changeViewMode, next, prev, today, title };
};

export default Calendar;
