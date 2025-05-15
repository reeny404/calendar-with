'use client';

import { getLoginPath } from '@/lib/supabase/auth';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';

export default function LoginButton() {
  const handleClick = (type: 'google' | 'kakao') => async () => {
    const {
      data: { url },
      error,
    } = await getLoginPath(type);

    if (error) {
      console.error(error);
    }

    window.location.href = url;
  };

  const testInsert = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('user').insert({
      type: 'insert-test',
      email: 'test@test.com',
    });

    console.warn('hello!!!', data, error);
  };

  return (
    <>
      <div
        className='w-12 h-12 p-3 flex items-center justify-center border rounded-full'
        onClick={handleClick('google')}
      >
        구
        <Image src='/google-logo.svg' alt='google-logo' width={20} height={20} />
      </div>

      <div
        className='w-12 h-12 p-3 flex items-center justify-center border rounded-full'
        onClick={handleClick('kakao')}
      >
        카
        <Image src='/kakao-logo.svg' alt='kakao-logo' width={20} height={20} />
      </div>

      <div
        className='w-12 h-12 p-3 flex items-center justify-center border rounded-full'
        onClick={testInsert}
      >
        테
        <Image src='/kakao-logo.svg' alt='kakao-logo' width={20} height={20} />
      </div>
    </>
  );
}
