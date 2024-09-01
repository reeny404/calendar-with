import clsx from 'clsx';
import { PropsWithChildren } from 'react';

function RootPage() {
  const month: number = 9;

  const startDate: Date = new Date(2024, month - 1, 1);
  const endDate: Date = new Date(2024, month, 0);
  const getDateNumber = (i: number) => {
    const date = i + 1 - startDate.getDay();
    return date > 0 ? date : '';
  };
  // const isToday =

  return (
    <main className='min-h-[calc(100%-3rem)]'>
      <h3 className='w-full pb-6 text-center text-xl font-semibold'>
        {month}월
      </h3>
      <section className=''>
        <div className='grid grid-cols-7'>
          <Box className='text-red-600 font-medium'>일</Box>
          <Box>월</Box>
          <Box>화</Box>
          <Box>수</Box>
          <Box>목</Box>
          <Box>금</Box>
          <Box className='text-blue-600 font-medium'>토</Box>
        </div>
        <div className='h-96 grid grid-cols-7 justify-self-center align-text-top'>
          {Array(endDate.getDate() + startDate.getDay())
            .fill(undefined)
            .map((_, i) => (
              <Box key={i} className={clsx('w-full h-full')}>
                {getDateNumber(i)}
              </Box>
            ))}
        </div>
      </section>
    </main>
  );
}

type BoxProps = { className?: string } & PropsWithChildren;
function Box({ children, className }: BoxProps) {
  return <div className={clsx('h-6 text-center', className)}>{children}</div>;
}

export default RootPage;
