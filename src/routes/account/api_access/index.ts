import { ApiBase } from '../../../base/api';

export class ApiAccessRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/account/apikey';
  }

  public async create_api_key(): Promise<unknown> {
    // TODO: check docs (/account/apikey/create or /account/token/create)?
    return this.api.post<unknown>(`${this.baseUri}/create`, {});
  }

  public async disable_api_key(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/disable`, {});
  }
}
