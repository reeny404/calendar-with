export function getLoginPath() {
  return "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly"
    + `&response_type=token&redirect_uri=${process.env.AUTH_REDIRECT_URI}&client_id=${process.env.AUTH_CLIENT_ID}`;
}