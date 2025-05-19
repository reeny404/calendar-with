import api from '@/lib/api/index.api';
import { useQuery } from '@tanstack/react-query';

interface Props {
  calendarId: string;
  date: Date;
}

export function useGetSchedule(props: Props) {
  const { calendarId, date } = props;

  return useQuery({
    queryKey: ['schedule', calendarId, date],
    queryFn: async () => api.schedule.getList(props),
    enabled: !!calendarId && !!date,
  });
}
