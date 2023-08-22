import { ApiBase } from '../../../base/api';
import { IGetCurrencyRatesResponse } from './types';

export class CurrencyRateRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/config/currency';
  }

  public async get_currency_rates(): Promise<IGetCurrencyRatesResponse> {
    return this.api.get<IGetCurrencyRatesResponse>(`${this.baseUri}/list`);
  }
}
