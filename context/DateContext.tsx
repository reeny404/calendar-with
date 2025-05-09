import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

type DateContextType = {
  date: Date | null;
  // eslint-disable-next-line no-unused-vars
  setDate: (date: Date) => void;
};

export const DateContext = createContext<DateContextType>({
  date: null,
  setDate: () => {},
});

export const DateProvider = ({ children }: PropsWithChildren) => {
  const [date, setDate] = useState<Date | null>(null);

  return <DateContext.Provider value={{ date, setDate }}>{children}</DateContext.Provider>;
};
