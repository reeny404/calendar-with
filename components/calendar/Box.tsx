import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

type BoxProps = { className?: string } & PropsWithChildren;

export function DateBox({ children, className }: BoxProps) {
  return <div className={clsx('py-1 text-center', className)}>{children}</div>;
}
