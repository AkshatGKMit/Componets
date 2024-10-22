declare global {
  type ApiCallError = {
    status: number;
    message: string;
  };

  type ApiCallSuccess<T> = {
    success: true;
    responseData: T;
  };

  type ApiCallFailure = {
    success: false;
    error: ApiCallError;
  };

  type ApiCallResponse<T> = ApiCallSuccess<T> | ApiCallFailure;

  type ApiMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

  type ApiHeaders = { [key: string]: string };

  type ApiAuth = { username: string; password: string };

  type ApiCallParams<T, Params = {}, Body = {}> = {
    url: string;
    method: ApiMethods;
    baseURL?: string;
    headers?: ApiHeaders;
    params?: Params;
    data?: Body;
    timeout?: number;
    withCredentials?: boolean;
    auth?: ApiAuth;
  };
}

export {};
