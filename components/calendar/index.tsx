'use client';

import { useMemo } from 'react';
import { Box } from '../schedule/Box';
import Schedules from '../schedule';

type CalendarProps = {
  month: number; // 현재 달
  day: number | null; // 선택된 날짜
};

function Calendar({ month, day }: CalendarProps) {
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
    <div className='flex flex-col h-full'>
      <div className='grid grid-cols-7'>
        <span className='py-1 text-center text-red-600'>일</span>
        <span className='py-1 text-center'>월</span>
        <span className='py-1 text-center'>화</span>
        <span className='py-1 text-center'>수</span>
        <span className='py-1 text-center'>목</span>
        <span className='py-1 text-center'>금</span>
        <span className='py-1 text-center text-blue-600'>토</span>
      </div>
      <div className='flex-1 grid grid-cols-7'>
        {dates.map((date, i) => (
          <Box key={i} title={date} selected={date === day} />
        ))}
      </div>
      <div className='relative bottom-0 py-3 space-y-2 border-t'>
        {day && <Schedules month={month} day={day} />}
        <div className='space-x-1 flex'>
          <input className='flex-1 px-3 py-1 border border-gray-400 rounded outline-none' />
          <button className='px-4 border text-white bg-gray-700 rounded'>추가</button>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
