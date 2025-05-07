'use client';

import Calendar from '@/components/calendar/Calendar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function CalendarPage() {
  const today = new Date();
  const [month, setMonth] = useState<number>(today.getMonth() + 1);

  return (
    <main className='h-content'>
      <section className='pb-6 flex justify-center'>
        <Button variant='ghost' onClick={() => setMonth((v) => v - 1)}>
          ◀
        </Button>
        <h3 className='px-10 text-xl font-semibold'>{month}월</h3>
        <Button variant='ghost' onClick={() => setMonth((v) => v + 1)}>
          ▶
        </Button>
      </section>
      <Calendar month={month} day={today.getMonth() + 1 === month ? today.getDate() : null} />
    </main>
  );
}

export default CalendarPage;
