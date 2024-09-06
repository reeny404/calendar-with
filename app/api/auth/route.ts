import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { access_token, token_type, expires_in, error } = await request.json();

    if (error) {
      throw new Error(error);
    }

    const supabase = createClient();
    const { data: list } = await supabase
      .from("token")
      .select()
      .eq("access_token", access_token);

    if (!list?.length) {
      const { error: insertError } = await supabase
        .from("token")
        .insert({
          social_type: 'google',
          token_type,
          access_token,
          expire: expires_in
        });

      if (insertError) {
        throw insertError;
      }
    }

    return NextResponse.json({ type: token_type, accessToken: access_token });
  } catch (e) {
    console.error(e);
    return NextResponse.json(e, { status: 500 });
  }
}