import { ApiBase } from '../../../base/api';

export class PlatformStatusRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/config/status';
  }

  public async get_platform_status(): Promise<unknown> {
    return this.api.get<unknown>(`${this.baseUri}/get`);
  }
}
