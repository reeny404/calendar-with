import Header from '@/components/header/Header';
import { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen max-w-[768px] mx-auto'>
      <Header />
      {children}
    </div>
  );
}

export default layout;
