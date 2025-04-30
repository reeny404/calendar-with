import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { Button } from '../ui/button';

export default function Header() {
  const {title, date} = useMemo(() => {
    return {
      title: format(new Date(), 'yyyy년 MM월'),
      date: new Date().getDate(),
    };
  }, []);

  return (
    <header className='w-full h-header px-0.5 py-2 grid grid-cols-3 items-center justify-between'>
      <Link href='/'>
        <Image
          src='/logo.png'
          alt='logo'
          width={50}
          height={50}
          priority
        />
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
