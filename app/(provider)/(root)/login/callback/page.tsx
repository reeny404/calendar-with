'use client';

import Loading from '@/components/Loading';
import { BASE_URL } from '@/constants/env';
import { ParamUtil } from '@/utils/ParamUtil';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';

function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const queryString: string = window.location.hash.replace('#', '');
    const params = ParamUtil.parseString(queryString);
    if (params.error) {
      router.replace('/login/fail?error=' + JSON.stringify(params.error));
      return;
    }

    fetch(BASE_URL + '/api/auth', {
      method: 'POST',
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((response) => {
        new Cookies().set('access_token', response.data.accessToken);
        router.replace('/');
      })
      .catch((reason) => {
        console.warn(reason);
        router.replace('/login');
      });
  }, [router]);

  return <Loading />;
}

export default AuthCallbackPage;
