import { ApiBase } from '../../../base/api';
import { IGetPricingSummaryPayload, IGetPricingSummaryResponse, IGetSalesPayload, IGetSalesResponse } from './types';

export class PricingRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/pricing';
  }

  public async get_sales(payload: IGetSalesPayload): Promise<IGetSalesResponse> {
    return this.api.post<IGetSalesResponse, IGetSalesPayload>(`${this.baseUri}/list`, payload);
  }

  public async get_pricing_summary(payload: IGetPricingSummaryPayload): Promise<IGetPricingSummaryResponse> {
    return this.api.post<IGetPricingSummaryResponse, IGetPricingSummaryPayload>(`${this.baseUri}/summary`, payload);
  }
}
