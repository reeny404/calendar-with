/**
 * to get AccessToken
 */
export function getLoginPath() {
  return "https://accounts.google.com/o/oauth2/v2/auth"
    + "?scope=profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&"
    // + "&prompt=consent" // 강제 권한 요청
    + "&include_granted_scopes=true&response_type=token"
    + `&redirect_uri=${process.env.AUTH_REDIRECT_URI}&client_id=${process.env.AUTH_CLIENT_ID}`;
}