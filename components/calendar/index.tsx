import Schedules from '@/components/schedule';
import { Box } from '@/components/schedule/Box';

type CalendarProps = {
  dates: number[]; // 달력 날짜 목록
  selection: Date | null; // 선택된 날짜
};

function Calendar({ dates, selection }: CalendarProps) {
  const day = selection.getDate();

  return (
    <section className='flex flex-col h-full'>
      <header className='py-1 grid grid-cols-7 opacity-50 text-sm text-center'>
        <span className='text-red-600'>일</span>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span className='text-blue-600'>토</span>
      </header>
      <div className='flex-1 grid grid-cols-7'>
        {dates.map((date, i) => (
          <Box key={i} title={date} selected={date === day} />
        ))}
      </div>
      <Schedules />
    </section>
  );
}

export default Calendar;
