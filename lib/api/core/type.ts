export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

/**
 * 성공 응답 예시
  {
    "status": "OK",
    "statusCode": 200,
    "data": { .... }
    "error": null
  }
 *
 * 실패 응답 예시
  {
    "status": "FAIL",
    "statusCode": 404,
    "data": null,
    "error": {
        "code": "NOT_FOUND",
        "message": "Access token not found",
        "trace": ""
    }
  }
 */
export interface ApiResponse<T> {
  status: 'OK' | 'FAIL';
  statusCode: number;
  data: T;
  error?: {
    code: string;
    message: string;
    trace: string;
  };
}
