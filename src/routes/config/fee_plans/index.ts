import { ApiBase } from '../../../base/api';
import { IGetFreePlansResponse } from './types';

export class FeePlanRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/config/fee_plan';
  }

  public async get_fee_plans(): Promise<IGetFreePlansResponse> {
    return this.api.get<IGetFreePlansResponse>(`${this.baseUri}/list`);
  }
}
