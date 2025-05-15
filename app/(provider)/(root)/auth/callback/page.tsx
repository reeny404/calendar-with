import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  searchParams: Promise<Record<string, string | string[]>>;
};

export default async function LoginCallbackPage(props: Props) {
  // 성공시 {code}, 실패 시 {error, error_code, error_description}
  const { error_description, ...rest } = await props.searchParams;

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-y-4'>
      <p className='text-2xl font-bold'>LOGIN {error_description ? 'FAILED' : 'SUCCESS'}</p>
      <p className='px-20 text-balance'>{JSON.stringify({ error_description, ...rest })}</p>
      <div className='flex gap-x-4'>
        <Button asChild>
          <Link href='/auth/login'>로그인 페이지로</Link>
        </Button>
        <Button asChild>
          <Link href='/'>홈으로</Link>
        </Button>
      </div>
    </div>
  );
}
