import { UserInfo } from '@/types/auth.types';
import { Tables } from '@/types/database.types';
import { createClient } from '@/utils/supabase/server';

export const User = {
  select: async (socialId: string): Promise<Tables<'user'>> => {
    if (!socialId) {
      return null;
    }

    const supabase = createClient();
    const { data } = await supabase
      .from('users')
      .select()
      .eq('social_id', socialId)
      .maybeSingle();

    return data;
  },
  insert: async (info: UserInfo): Promise<Tables<'user'>> => {
    const user = await User.select(info.social_id);
    if (user) {
      return user;
    }

    const supabase = createClient();
    const { data: insertUser, error } = await supabase
      .from('user')
      .insert(info)
      .select<'*', Tables<'user'>>()
      .single();

    if (error) {
      throw error;
    }

    return insertUser;
  },
};
