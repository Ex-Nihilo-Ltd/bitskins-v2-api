import { ApiBase } from '../../../base/api';
import {
  IListHistoricalRewardsPayload,
  IListHistoricalRewardsResponse,
  ISetOrChangeAffiliateCodePayload,
} from './types';

export class AffilateRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/account/affiliate';
  }

  public async get_affiliate_info(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/me`, {});
  }

  public async claim_money(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/transfer_money`, {});
  }

  public async list_historical_rewards(
    payload: IListHistoricalRewardsPayload = {},
  ): Promise<IListHistoricalRewardsResponse> {
    return this.api.post<IListHistoricalRewardsResponse, IListHistoricalRewardsPayload>(
      `${this.baseUri}/history`,
      payload,
    );
  }

  public async set_or_change_affiliate_code(payload: ISetOrChangeAffiliateCodePayload): Promise<unknown> {
    return this.api.post<unknown, ISetOrChangeAffiliateCodePayload>(`${this.baseUri}/set_code`, payload);
  }
}
