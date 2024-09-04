import Image from 'next/image';

function LoginPage() {
  return (
    <div className='max-w-[430px] px-4 mx-auto'>
      <h2 className='py-10 leading-relaxed text-3xl'>
        쉬운 공유 캘린더
        <br />
        <span className='font-semibold'>calendar with</span> 사용하기
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
      <section className='pt-2 flex justify-center'>
        <button className='p-3 border rounded-full'>
          <Image
            src='/google-logo.svg'
            alt='google logo'
            width={20}
            height={20}
          />
        </button>
      </section>
    </div>
  );
}

export default LoginPage;
