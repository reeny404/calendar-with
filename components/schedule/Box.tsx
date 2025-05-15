import type { Line } from '@/components/schedule/Line';
import { DateContext } from '@/context/DateContext';
import clsx from 'clsx';
import { useContext, type ReactElement } from 'react';

type BoxProps = {
  title: number | undefined;
  selected: boolean;
  children?: ReactElement<typeof Line>[];
};

export function Box({ title, children, selected }: BoxProps) {
  const { selection, setSelection } = useContext(DateContext);
  const isValid = title !== undefined;

  const handleClick = (date: number) => {
    const time = selection.setDate(date);
    const newDate = new Date(time);
    setSelection(newDate);
  };

  return (
    <div
      className={clsx(
        'flex flex-col py-1 text-center nth-[7n-6]:text-red-500 nth-[7n]:text-blue-500 border rounded',
        isValid && 'hover:shadow cursor-pointer',
        selected ? 'border-gray-300' : 'border-white',
      )}
      {...(isValid && { onClick: () => handleClick(title) })}
    >
      <div className='py-1'>{title}</div>
      <div className='flex flex-col'>{children}</div>
    </div>
  );
}
