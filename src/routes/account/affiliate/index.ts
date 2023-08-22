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

  // TODO: Check why nothing is being returned
  public async get_affiliate_info(): Promise<void> {
    return this.api.post<void>(`${this.baseUri}/me`, {});
  }

  // TODO: untested route
  public async claim_money(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/transfer_money`, {});
  }

  // TODO: Update response when list is not empty
  public async list_historical_rewards(
    payload: IListHistoricalRewardsPayload = {},
  ): Promise<IListHistoricalRewardsResponse> {
    return this.api.post<IListHistoricalRewardsResponse, IListHistoricalRewardsPayload>(
      `${this.baseUri}/history`,
      payload,
    );
  }

  // TODO: untested - Test on dummy acc
  public async set_or_change_affiliate_code(payload: ISetOrChangeAffiliateCodePayload): Promise<unknown> {
    return this.api.post<unknown, ISetOrChangeAffiliateCodePayload>(`${this.baseUri}/set_code`, payload);
  }
}
