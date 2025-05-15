'use client';

import Calendar from '@/components/calendar';
import { Button } from '@/components/ui/button';
import { DateContext } from '@/context/DateContext';
import { useContext } from 'react';

function CalendarPage() {
  const { selection: selection, setSelection: setSelection } = useContext(DateContext);
  const month = selection.getMonth() + 1;

  const handleChangeMonth = (v: number) => {
    const time = selection.setMonth(selection.getMonth() + v);
    const date = new Date(time);

    setSelection(date);
  };

  return (
    <main className='h-content'>
      <section className='pb-6 flex justify-center'>
        <Button variant='ghost' onClick={() => handleChangeMonth(-1)}>
          ◀
        </Button>
        <h3 className='px-10 text-xl font-semibold'>{month}월</h3>
        <Button variant='ghost' onClick={() => handleChangeMonth(1)}>
          ▶
        </Button>
      </section>
      <Calendar month={month} day={selection.getDate()} />
    </main>
  );
}

export default CalendarPage;
