'use client';

import { DateContext } from '@/context/DateContext';
import { format } from 'date-fns';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { Button } from './ui/button';

export default function Header() {
  const { selection: selection, setSelection: setSelection } = useContext(DateContext);
  const { title, date } = useMemo(() => {
    return {
      title: format(selection, 'yyyy년 MM월'),
      date: selection.getDate(),
    };
  }, [selection]);

  const handleChangeMonth = (v: number) => {
    const time = selection.setMonth(selection.getMonth() + v);
    const date = new Date(time);

    setSelection(date);
  };

  return (
    <header className='w-full h-header grid grid-cols-3 items-center justify-between'>
      <Link href='/' className='font-princess-sofia text-2xl'>
        Calendar With
      </Link>
      <div className='flex items-center justify-center gap-x-4'>
        <Button variant='ghost' onClick={() => handleChangeMonth(-1)}>
          ◀
        </Button>
        <h3 className='text-center'>{title}</h3>
        <Button variant='ghost' onClick={() => handleChangeMonth(1)}>
          ▶
        </Button>
      </div>
      <div className='flex items-center justify-end gap-x-4'>
        <Link href='/auth/login'>login</Link>
        <Button variant='outline' size='icon' className='border-gray-700'>
          {date}
        </Button>
      </div>
    </header>
  );
}
