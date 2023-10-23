import { ICounter } from '../../common/types';

export interface IListHistoricalRewardsPayload {
  limit?: number;
  offset?: number;
}

export interface ISetOrChangeAffiliateCodePayload {
  code: string;
}

export interface IListHistoricalRewardsResponse {
  counter: ICounter;
  list: [];
}
