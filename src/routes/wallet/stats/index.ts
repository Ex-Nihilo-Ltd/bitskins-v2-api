import { ApiBase } from '../../../base/api';
import { IGetKYCLimitsResponse, IGetWalletStatsResponse } from './types';

export class WalletStatsRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/stats';
  }

  public async get_wallet_stats(): Promise<IGetWalletStatsResponse> {
    return this.api.post<IGetWalletStatsResponse>(`${this.baseUri}/get`, {});
  }

  public async get_kyc_limits(): Promise<IGetKYCLimitsResponse> {
    return this.api.post<IGetKYCLimitsResponse>(`${this.baseUri}/get_kyc_limit`, {});
  }
}
