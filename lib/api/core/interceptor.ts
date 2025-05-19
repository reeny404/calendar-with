import type { ApiResponse, HttpMethod } from './type';

const Interceptor = {
  request: {
    onFulfilled: (method: HttpMethod, config?: RequestInit) => {
      const headers = new Headers(config?.headers);
      headers.set('Content-Type', 'application/json');

      return { ...config, method, headers };
    },
  },
  response: {
    onFulfilled: async <T>(response: Response) => {
      const { status, data, error }: ApiResponse<T> = await response.json().catch((e) => {
        console.warn('fail to response.json, ', e);
        return {};
      });

      if (response.ok && status === 'OK') {
        return data;
      }

      throw new Error(`fail to fetch \n : ${error?.message ?? response}`);
    },
  },
};

export default Interceptor;
