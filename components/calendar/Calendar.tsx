'use client';

import clsx from 'clsx';
import { useMemo } from 'react';
import { DateBox } from './Box';
import Schedules from './Schedules';

type CalendarProps = {
  month: number; // 현재 달
  day: number | null; // 선택된 날짜
};

function Calendar({ month, day }: CalendarProps) {
  const header = useMemo(() => {
    return (
      <div className='grid grid-cols-7'>
        {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
          <span key={index} className='py-1 text-center nth-1:text-red-600 nth-7:text-blue-600'>
            {day}
          </span>
        ))}
      </div>
    );
  }, []);

  const dates = useMemo(() => {
    const startDate: Date = new Date(2024, month - 1, 1);
    const endDate: Date = new Date(2024, month, 0);

    return Array(endDate.getDate() + startDate.getDay())
      .fill(undefined)
      .map((_, i) => {
        const date = i + 1 - startDate.getDay();
        return date > 0 ? date : '';
      });
  }, [month]);

  return (
    <div className='flex flex-col h-full'>
      {header}
      <div className='flex-1 grid grid-cols-7'>
        {dates.map((date, i) => (
          <DateBox
            key={i}
            className={clsx('w-full h-full nth-[7n-6]:text-red-500 nth-[7n]:text-blue-500', {
              'border-2 rounded': date === day,
            })}
          >
            {date}
          </DateBox>
        ))}
      </div>
      <div className='relative bottom-0 mx-5 py-3 space-y-2 border-t'>
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
