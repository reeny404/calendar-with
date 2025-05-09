import type { Line } from '@/components/schedule/Line';
import clsx from 'clsx';
import type { ReactElement } from 'react';

type BoxProps = {
  title: string | number;
  selected: boolean;
  children?: ReactElement<typeof Line>[];
};

export function Box({ title, children, selected }: BoxProps) {
  return (
    <div
      className={clsx(
        'flex flex-col py-1 text-center nth-[7n-6]:text-red-500 nth-[7n]:text-blue-500 hover:border border-gray-300 rounded',
        selected && 'border',
      )}
    >
      <div className='py-1'>{title}</div>
      <div className='flex flex-col'>{children}</div>
    </div>
  );
}
