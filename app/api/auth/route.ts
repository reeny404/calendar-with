import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { access_token, token_type, expires_in } = await request.json();

    const supabase = createClient();
    const { error } = await supabase
      .from("token")
      .insert({
        social_type: 'google',
        token_type,
        access_token,
        expire: expires_in
      });
    
    if (error) {
      throw error;
    }

    return NextResponse.json({ type : token_type, accessToken : access_token });
  } catch (e) {
    console.error(e);
    return NextResponse.json(e, { status : 500 });
  }
}