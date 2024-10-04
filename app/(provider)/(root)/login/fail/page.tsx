import Link from 'next/link';

type PageProps = {
  searchParams?: { message: string };
};

function SuggestLoginPage({ searchParams: { message } }: PageProps) {
  return (
    <div className='w-full mx-auto py-10 text-center'>
      <p className='text-lg'>로그인에 실패했습니다. 다시 시도해주세요.</p>
      <p className='text-xs'>상세 사유 : {message}</p>
      <div>
        <Link href='/login'>로그인하기</Link>
      </div>
    </div>
  );
}

export default SuggestLoginPage;
