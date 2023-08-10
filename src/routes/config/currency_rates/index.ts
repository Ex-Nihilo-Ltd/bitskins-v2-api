import { ApiBase } from '../../../base/api';

export class CurrencyRateRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/config/currency';
  }

  public async get_currency_rates(): Promise<unknown> {
    return this.api.get<unknown>(`${this.baseUri}/list`);
  }
}
