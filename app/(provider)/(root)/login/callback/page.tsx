'use client';

import { BASE_URL } from '@/constants/env';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';

function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const params: Record<string, string> = {};
    window.location.hash
      .replace('#', '')
      .split('&')
      .forEach((str) => {
        const [key, value] = str.split('=');
        params[key] = value;
      });

    fetch(BASE_URL + '/api/auth', {
      method: 'POST',
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((response) => {
        new Cookies().set('access_token', response.accessToken);
        console.log(response);
        router.replace('/');
      })
      .catch((reason) => {
        console.warn(reason);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO 로딩 화면 그리기
  return <div>로그인 콜백 페이지</div>;
}

export default AuthCallbackPage;
