import Header from '@/components/header/Header';
import { DateProvider } from '@/context/DateContext';
import type { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren) {
  return (
    <DateProvider>
      <div className='min-h-screen max-w-3xl mx-auto'>
        <Header />
        {children}
      </div>
    </DateProvider>
  );
}

export default layout;
