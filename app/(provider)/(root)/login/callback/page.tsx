'use client';

import dynamic from 'next/dynamic';

const AuthCallbackPage = dynamic(() => import('./AuthCallback'), {
  ssr: false,
});

export default AuthCallbackPage;
