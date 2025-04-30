import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

type BoxProps = { className?: string } & PropsWithChildren;

export function Box({ children, className }: BoxProps) {
  return <div className={clsx('h-6 text-center', className)}>{children}</div>;
}
