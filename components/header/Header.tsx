import Image from 'next/image';

function Header() {
  return (
    <header className='w-full h-12 px-4 mb-6 flex items-center justify-between border-b'>
      <div>
        <Image src='/icons/menu.svg' alt='menu' width={24} height={24} />
      </div>
      <div className='flex space-x-2'>
        <Image src='/icons/reload.svg' alt='sync' width={24} height={24} />
        <div className='w-6 h-6 flex items-center justify-center border-2 border-black rounded font-semibold'>
          {new Date().getDate()}
        </div>
      </div>
    </header>
  );
}

export default Header;
