import { ApiBase } from '../../../base/api';

export class FeePlanRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/config/fee_plan';
  }

  public async get_fee_plans(): Promise<unknown> {
    return this.api.get<unknown>(`${this.baseUri}/list`);
  }
}
