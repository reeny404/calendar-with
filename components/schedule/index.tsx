import { DateContext } from '@/context/DateContext';
import { useGetSchedule } from '@/hooks/useGetSchedule';
import type { Tables } from '@/types/database.types';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

function Schedules() {
  const [isHide, setIsHide] = useState<boolean>(true);
  const { selection } = useContext(DateContext);

  const {
    data: list = [],
    error,
    status,
  } = useGetSchedule({
    calendarId: '1',
    date: selection,
  });

  if (status !== 'success') {
    console.log(error);
    return (
      <div className='p-5'>
        <p>{error?.message}</p>
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsHide(!isHide)}
      className={clsx('relative bottom-0 py-3 space-y-2 border-t', isHide && 'hidden')}
    >
      <div className='space-y-4'>
        {list.map((schedule: Tables<'schedule'>) => (
          <div key={schedule.id} className='flex items-end'>
            <h4 className='text-lg'>{schedule.title}</h4>
            <div className='text-sm indent-2'>
              <span>
                {schedule.is_all_day ? '하루종일' : `${schedule.start_date} ~ ${schedule.end_date}`}
              </span>
              <span className='px-1 text-gray-500 text-xs'>|</span>
              <span>{schedule.calendar_name}</span>
            </div>
          </div>
        ))}
      </div>
      {status !== 'success' && (
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      )}
      <div className='space-x-1 flex'>
        <Input />
        <Button variant='outline'>추가</Button>
      </div>
    </div>
  );
}

export default Schedules;
