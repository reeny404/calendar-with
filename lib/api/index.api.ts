import ScheduleApi from './schedule';

class Api {
  public readonly schedule: ScheduleApi;

  constructor() {
    this.schedule = new ScheduleApi();
  }
}

const api = new Api();

export default api;
