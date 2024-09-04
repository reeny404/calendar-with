'use client';
import Calendar from '@/components/calendar/Calendar';
import { useState } from 'react';

function CalendarPage() {
  const today = new Date();
  const [month, setMonth] = useState<number>(today.getMonth() + 1);

  return (
    <main className='min-h-[calc(100%-3rem)]'>
      <section className='pb-6 flex justify-center'>
        <button onClick={() => setMonth((v) => v - 1)}>◀</button>
        <h3 className='px-10 text-xl font-semibold'>{month}월</h3>
        <button onClick={() => setMonth((v) => v + 1)}>▶</button>
      </section>
      <section className=''>
        <Calendar
          month={month}
          day={today.getMonth() + 1 === month ? today.getDate() : null}
        />
      </section>
    </main>
  );
}

export default CalendarPage;
