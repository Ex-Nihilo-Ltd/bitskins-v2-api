import { ApiBase } from '../../../base/api';
import { ICreateApiKeyResponse } from './types';

export class ApiAccessRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/account/apikey';
  }

  public async create_api_key(): Promise<ICreateApiKeyResponse> {
    // TODO: check docs (/account/apikey/create or /account/token/create)?
    return this.api.post<ICreateApiKeyResponse>(`${this.baseUri}/create`, {});
  }

  public async disable_api_key(): Promise<boolean> {
    return this.api.post<boolean>(`${this.baseUri}/disable`, {});
  }
}
