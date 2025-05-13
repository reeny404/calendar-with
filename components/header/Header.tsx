'use client';

import { DateContext } from '@/context/DateContext';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { Button } from '../ui/button';

export default function Header() {
  const { selection: selection } = useContext(DateContext);
  const { title, date } = useMemo(() => {
    return {
      title: format(selection, 'yyyy년 MM월'),
      date: selection.getDate(),
    };
  }, [selection]);

  return (
    <header className='w-full h-header flex items-center justify-between'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' width={50} height={50} priority />
      </Link>
      <h3 className='text-center'>{title}</h3>
      <div className='flex items-center justify-end gap-x-4'>
        <Button variant='outline' size='icon' className='border-gray-700'>
          {date}
        </Button>
      </div>
    </header>
  );
}
