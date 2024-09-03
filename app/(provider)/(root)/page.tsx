import Calendar from '@/components/calendar/Calendar';

function RootPage() {
  const today = new Date();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();

  return (
    <main className='min-h-[calc(100%-3rem)]'>
      <section className='pb-6 flex justify-center'>
        <button>◀</button>
        <h3 className='px-10 text-xl font-semibold'>{month}월</h3>
        <button>▶</button>
      </section>
      <section className=''>
        <Calendar month={month} day={day} />
      </section>
    </main>
  );
}

export default RootPage;
