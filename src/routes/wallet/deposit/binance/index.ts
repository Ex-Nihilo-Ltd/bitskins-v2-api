import { ApiBase } from '../../../../base/api';
import { IDepositBinancePayload } from './types';

export class WalletDepositBinanceRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/deposit/binancepay';
  }

  public async deposit_binance(payload: IDepositBinancePayload): Promise<unknown> {
    return this.api.post<unknown, IDepositBinancePayload>(`${this.baseUri}/create`, payload);
  }
}
