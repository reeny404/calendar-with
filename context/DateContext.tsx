'use client';

import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

type DateContextType = {
  selection: Date | null;
  // eslint-disable-next-line no-unused-vars
  setSelection: (date: Date) => void;
};

export const DateContext = createContext<DateContextType>({
  selection: undefined,
  setSelection: () => {},
});

export const DateProvider = ({ children }: PropsWithChildren) => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <DateContext.Provider value={{ selection: date, setSelection: setDate }}>
      {children}
    </DateContext.Provider>
  );
};
