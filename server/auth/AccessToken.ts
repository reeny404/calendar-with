import { AccessToken as AccessTokenType } from '@/types/auth.types';
import { createClient } from '@/utils/supabase/server';

export const AccessToken = {
  insert: async (token: AccessTokenType): Promise<AccessTokenType> => {
    const supabase = createClient();
    const { error } = await supabase.from('token').insert(token);

    if (error) {
      console.warn('[Warn] fail to insert token', error);
    }

    return token;
  },
};
