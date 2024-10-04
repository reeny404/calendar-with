import { AccessToken } from '@/server/auth/AccessToken';
import { User } from '@/server/auth/User';
import { NextRequest, NextResponse } from 'next/server';

/**
 * 최초 회원가입
 *
 * 1. accessToken from request parameter
 * 2. request user info
 * 3. insert user & accessToken
 */
export async function POST(request: NextRequest) {
  try {
    const { access_token, token_type, expires_in } = await request.json();
    const { resourceName, nicknames, photos, emailAddresses } = await fetch(
      'https://people.googleapis.com/v1/people/me?personFields=emailAddresses,nicknames,photos',
      {
        method: 'GET',
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      },
    ).then((res) => res.json());

    // user insert는 필수 이기 때문에 기다리기
    await User.insert({
      type: 'google',
      email: emailAddresses[0].value,
      nick: nicknames[0].value,
      profile: photos[0].url,
      social_id: resourceName.replace('people/', ''),
    });

    // 만약 안되어도 토큰 재요청하면 되기 때문에 기다리지 않는다.
    AccessToken.insert({
      social_type: 'google',
      token_type,
      access_token,
      expires_in,
    });

    return NextResponse.json({
      status: 200,
      message: 'ok',
      data: { accessToken: access_token },
    });
  } catch (e) {
    console.error('[Error] fail to join user', e);
    return NextResponse.json({
      status: 500,
      message: '재시도 해주세요',
      error: e,
    });
  }
}
