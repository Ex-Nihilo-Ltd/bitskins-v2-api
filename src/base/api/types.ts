export interface IApiBaseConfig {
  apiKey?: string;
  authToken?: string;
}

export interface IApiBaseError {
  code: string;
  error_type: string;
  error_path: string;
}
