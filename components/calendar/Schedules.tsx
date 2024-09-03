type SchedulesProps = {
  month: number;
  day: number;
};

function Schedules({ month, day }: SchedulesProps) {
  // TODO month, day 기준으로 데이터 불러와서 그리기

  return (
    <>
      <div className='flex items-end'>
        <h4 className='text-lg'>어린이날</h4>
        <div className='text-sm indent-2'>
          <span>하루종일</span>
          <span className='px-1 text-gray-500 text-xs'>|</span>
          <span>김요일</span>
        </div>
      </div>
      <div className='flex items-end'>
        <h4 className='text-lg'>피카츄 돈가스 먹자</h4>
        <div className='text-sm indent-2'>
          <span>12:00 ~ 13:00</span>
          <span className='px-1 text-gray-500 text-xs'>|</span>
          <span>김요일, 박유월</span>
        </div>
      </div>
    </>
  );
}

export default Schedules;
