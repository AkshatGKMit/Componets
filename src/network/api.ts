import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

async function ApiCall<T, P = {}, D = {}>(params: ApiCallParams<T, P, D>): Promise<ApiCallResponse<T>> {
  const config: AxiosRequestConfig = { ...params };

  try {
    const response: AxiosResponse<T> = await axios(config);

    const res: ApiCallSuccess<T> = {
      success: true,
      responseData: response.data,
    };

    return res;
  } catch (error) {
    const axiosError = error as AxiosError;

    const res: ApiCallFailure = {
      success: false,
      error: {
        status: axiosError.response?.status || 500,
        message: axiosError.message,
      },
    };

    return res;
  }
}

export default ApiCall;
