import type { PropsWithChildren } from 'react';

export function Line({ children }: PropsWithChildren) {
  return <span className='py-0.5'>{children}</span>;
}
