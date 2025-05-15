'use client';

import loading from '@/public/lottie/loading.json';
import Lottie from 'react-lottie-player';

function Loading() {
  return (
    <>
      <div className='absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black opacity-30' />
      <div className='w-full py-20 flex items-center justify-center'>
        <Lottie loop animationData={loading} play />
      </div>
    </>
  );
}

export default Loading;
