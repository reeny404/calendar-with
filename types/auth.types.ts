export type AccessToken = {
  social_type: 'google';
  token_type: 'Bearer';
  access_token: string;
  expires_in: number;
};

export type UserInfo = {
  type: 'google';
  email: string;
  nick: string;
  profile: string;
  social_id: string;
};
