import type { Tables } from '@/types/database.types';
import { format } from 'date-fns';
import API from '../core/ApiClient';
import type { GetScheduleParams } from './parameter.type';

class ScheduleApi {
  private readonly url: string;

  constructor() {
    this.url = '/api/schedule';
  }

  async getList({ calendarId, date }: GetScheduleParams) {
    const queryString = new URLSearchParams({
      calendarId: calendarId,
      date: format(date, 'yyyy-MM-dd'),
    }).toString();

    return await API.get<Tables<'schedule'>[]>(`${this.url}?${queryString}`);
  }
}

export default ScheduleApi;
