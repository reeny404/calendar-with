import { Config } from '@/lib/config';
import Interceptor from './interceptor';
import type { HttpMethod } from './type';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(url: string, method: HttpMethod, options?: RequestInit): Promise<T> {
    try {
      const config = Interceptor.request.onFulfilled(method, options);
      const response = await fetch(`${this.baseURL}${url}`, config);
      return Interceptor.response.onFulfilled<T>(response);
    } catch (e) {
      console.error(`📨 ${method} ${url}\n`, e);
      throw e;
    }
  }

  public async get<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>(url, 'GET', options);
  }

  public async post<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>(url, 'POST', options);
  }

  public async put<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>(url, 'PUT', options);
  }

  public async patch<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>(url, 'PATCH', options);
  }

  public async delete<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>(url, 'DELETE', options);
  }
}

const API = new ApiClient(Config.API.BASE_URL);
export default API;
