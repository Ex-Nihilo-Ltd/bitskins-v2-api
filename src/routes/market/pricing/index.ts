import { ApiBase } from '../../../base/api';
import { IGetPricingSummaryPayload, IGetSalesPayload } from './types';

export class PricingRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/pricing';
  }

  public async get_sales(payload: IGetSalesPayload): Promise<unknown> {
    return this.api.post<unknown, IGetSalesPayload>(`${this.baseUri}/list`, payload);
  }

  public async get_pricing_summary(payload: IGetPricingSummaryPayload): Promise<unknown> {
    return this.api.post<unknown, IGetPricingSummaryPayload>(`${this.baseUri}/summary`, payload);
  }
}
