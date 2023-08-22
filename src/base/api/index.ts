import axios, { AxiosInstance, AxiosResponse, RawAxiosRequestConfig } from 'axios';
import { IApiBaseConfig, IApiBaseError } from './types';
import { ApiErrorCode, ApiErrorMessage, ApiErrorPath, IApiError } from '../error/types';

export class ApiBase {
  private api!: AxiosInstance;

  constructor(private readonly config: IApiBaseConfig) {
    this.api = axios.create({
      baseURL: 'https://api.bitskins.com',
    });

    this.configureInterceptors();
  }

  private configureInterceptors() {
    this.api.interceptors.request.use(
      (config) => {
        if (!config) {
          return config;
        }

        if (this.config.apiKey) {
          config.headers.set('x-apikey', this.config.apiKey);
        } else {
          config.headers.delete('x-apikey');
        }

        if (this.config.authToken) {
          config.headers.set('x-auth-token', this.config.authToken);
        } else {
          config.headers.delete('x-auth-token');
        }

        return config;
      },
      () => {
        throw {
          code: ApiErrorCode.REQ_000,
          error_type: 'public',
          error_path: ApiErrorPath.REQ_000,
          error_message: ApiErrorMessage.REQ_000,
        } as IApiError;
      },
    );

    this.api.interceptors.response.use(
      (res) => res,
      (error) => {
        if(error.response.data?.tradehold) {
          throw {
            code: 400,
            error_type: 'Forbidden',
            error_path: 400,
            error_message: `Can not withold item for ${error.response.data?.tradehold} days because it has tradehold active.`,
          };
        }

        if (error?.response.data?.code) {

          
          const errorCode = error.response.data.code as ApiErrorCode;
          
          throw {
            code: errorCode,
            error_type: error.response.data.error_type,
            error_path: ApiErrorPath[errorCode],
            error_message: ApiErrorMessage[errorCode],
          };
        }
        throw {
          code: ApiErrorCode.REQ_000,
          error_type: 'public',
          error_path: ApiErrorPath.REQ_000,
          error_message: ApiErrorMessage.REQ_000,
        } as IApiError;
      }
    );
  }

  public async get<TResponse, TData = unknown>(
    url: string,
    config?: RawAxiosRequestConfig<TData> | undefined,
  ): Promise<TResponse> {
    const { data } = await this.api.get<TResponse, AxiosResponse<TResponse>, TData>(url, config);

    return data;
  }

  public async post<TResponse, TData = unknown>(
    url: string,
    data?: TData,
    config?: RawAxiosRequestConfig<TData> | undefined,
  ) {
    const { data: resData } = await this.api.post<TResponse, AxiosResponse<TResponse>, TData>(url, data, config);

    return resData;
  }

  public async put<TResponse, TData = unknown>(
    url: string,
    data?: TData,
    config?: RawAxiosRequestConfig<TData> | undefined,
  ) {
    const { data: resData } = await this.api.put<TResponse, AxiosResponse<TResponse>, TData>(url, data, config);

    return resData;
  }

  public async delete<TResponse, TData = unknown>(
    url: string,
    config?: RawAxiosRequestConfig<TData> | undefined,
  ): Promise<TResponse> {
    const { data } = await this.api.delete<TResponse, AxiosResponse<TResponse>, TData>(url, config);

    return data;
  }
}
