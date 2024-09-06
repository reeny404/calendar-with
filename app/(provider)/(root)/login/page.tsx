import { getLoginPath } from '@/utils/auth/AuthUtil';
import Image from 'next/image';
import Link from 'next/link';

function LoginPage() {
  return (
    <div className='max-w-[500px] px-4 mx-auto'>
      <h2 className='py-10 leading-relaxed text-3xl'>
        내 일정은 비밀로,
        <br />
        공유는 간편하게
      </h2>
      <section className='space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='LoginEmail' className='text-sm'>
            이메일
          </label>
          <input
            autoFocus
            id='LoginEmail'
            placeholder='calendar-with@gmail.com'
            className='p-2 outline-none border-b focus:border-b-gray-800'
          />
        </div>
        <button className='w-full py-2 border rounded'>로그인</button>
      </section>
      <div className='flex py-10 items-center justify-center gap-8 text-gray-400'>
        <span className='flex-1 border-b'></span>
        <span>또는</span>
        <span className='flex-1 border-b'></span>
      </div>
      <section className='pt-2 flex justify-center space-x-4'>
        <Link
          className='w-12 h-12 p-3 flex items-center justify-center border rounded-full'
          href={getLoginPath()}
        >
          <Image
            src='/google-logo.svg'
            alt='google-logo'
            width={20}
            height={20}
          />
        </Link>
        {/* <Link
          className='w-12 h-12 p-3 flex items-center justify-center border rounded-full bg-kakao-yellow border-kakao-yellow '
          href={''}
        >
          <Image
            src='/kakao-logo.svg'
            alt='kakao-login'
            width={22}
            height={22}
          />
        </Link> */}
      </section>
    </div>
  );
}

export default LoginPage;
