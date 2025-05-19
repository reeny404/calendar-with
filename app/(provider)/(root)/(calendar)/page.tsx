'use client';

import Calendar from '@/components/calendar';
import { DateContext } from '@/context/DateContext';
import { useContext, useMemo } from 'react';

function CalendarPage() {
  const { selection: selection } = useContext(DateContext);
  const month = selection.getMonth() + 1;

  const dates = useMemo(() => {
    const startDay = new Date(2024, month - 1, 1).getDay(); // 현재 달, 첫째 날의 요일
    const endDate = new Date(2024, month, 0).getDate(); // 현재 달, 마지막 날의 날짜

    return Array(endDate + startDay)
      .fill(undefined)
      .map((_, i) => {
        const date = i + 1 - startDay;
        return date > 0 ? date : _;
      });
  }, [month]);

  return (
    <main className='h-content'>
      <Calendar dates={dates} selection={selection} />
    </main>
  );
}

export default CalendarPage;
