import { ApiBase } from '../../../base/api';
import { IPlatformStatusResponse } from './types';

export class PlatformStatusRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/config/status';
  }

  public async get_platform_status(): Promise<IPlatformStatusResponse> {
    return this.api.get<IPlatformStatusResponse>(`${this.baseUri}/get`);
  }
}
