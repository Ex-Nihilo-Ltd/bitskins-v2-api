import { ApiBase } from '../../../base/api';

export class WalletStatsRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/stats';
  }

  public async get_wallet_stats(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/get`, {});
  }

  public async get_kyc_limits(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/get_kyc_limit`, {});
  }
}
