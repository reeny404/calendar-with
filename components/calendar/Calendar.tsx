import clsx from 'clsx';
import { Box } from './Box';
import Schedules from './Schedules';

type CalendarProps = {
  month: number;
  day: number | null;
};

function Calendar({ month, day }: CalendarProps) {
  const startDate: Date = new Date(2024, month - 1, 1);
  const endDate: Date = new Date(2024, month, 0);
  const getDateNumber = (i: number) => {
    const date = i + 1 - startDate.getDay();
    return date > 0 ? date : '';
  };

  return (
    <>
      <div className='grid grid-cols-7'>
        <Box className='text-red-600 font-medium'>일</Box>
        <Box>월</Box>
        <Box>화</Box>
        <Box>수</Box>
        <Box>목</Box>
        <Box>금</Box>
        <Box className='text-blue-600 font-medium'>토</Box>
      </div>
      <div className='min-h-[55svh] grid grid-cols-7'>
        {Array(endDate.getDate() + startDate.getDay())
          .fill(undefined)
          .map((_, i) => {
            const date = getDateNumber(i);
            return (
              <Box
                key={i}
                className={clsx('w-full h-full', {
                  'border-2 rounded': date === day,
                })}
              >
                {date}
              </Box>
            );
          })}
      </div>
      <div className='mx-5 py-3 space-y-2 border-t'>
        {day && <Schedules month={month} day={day} />}
        <div className='space-x-1 flex'>
          <input className='flex-1 px-3 py-1 border border-gray-400 rounded outline-none' />
          <button className='px-4 border text-white bg-gray-700 rounded'>
            {/* // TODO 달력에 선택된 날짜에 schedule insert 되도록 */}
            추가
          </button>
        </div>
      </div>
    </>
  );
}

export default Calendar;
