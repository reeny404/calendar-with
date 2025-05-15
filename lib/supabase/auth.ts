import { createClient } from './client';

export async function getLoginPath(type: 'google' | 'kakao') {
  const supabase = createClient();
  return await supabase.auth.signInWithOAuth({
    provider: type,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });
}

/**
 * 카카오 소셜 로그인 함수
 * @returns 로그인 결과 (data 또는 error)
 */
export async function signInWithKakao() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
  });

  return { data, error };
}

/**
 * 로그아웃 함수
 */
export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  return { error };
}

/**
 * 현재 로그인된 사용자 정보 가져오기
 */
export async function getCurrentUser() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user, error };
}
