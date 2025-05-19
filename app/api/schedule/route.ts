import { createClient } from '@/lib/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const calendarId = searchParams.get('calendarId');
    const date = searchParams.get('date');

    if (!calendarId || !date) {
      return NextResponse.json(
        { code: 'ERROR', message: '필수 파라미터가 누락되었습니다.' },
        { status: 400 },
      );
    }

    // 날짜 범위 설정
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);

    const supabase = await createClient();
    const { data, error } = await supabase
      .from('schedule')
      .select('*')
      .eq('calendar_id', calendarId)
      .gte('start_date', startOfDay.toISOString())
      .lte('end_date', endOfDay.toISOString());

    if (error) {
      console.error('Schedule API Error:', error);
      return NextResponse.json(
        { code: 'ERROR', message: '데이터베이스 조회 중 오류가 발생했습니다.', error },
        { status: 500 },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Schedule API Error:', error);

    return NextResponse.json(
      { code: 'ERROR', message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
