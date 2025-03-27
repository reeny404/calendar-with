import Header from '@/components/header/Header';
import { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen max-w-3xl mx-auto'>
      <Header />
      {children}
    </div>
  );
}

export default layout;
