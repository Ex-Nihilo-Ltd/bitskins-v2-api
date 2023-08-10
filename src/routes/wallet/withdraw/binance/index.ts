import { ApiBase } from '../../../../base/api';
import { IWithdrawBinancePayload } from './types';

export class WalletWithdrawBinanceRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/withdraw/binancepay';
  }

  public async withdraw_binance(payload: IWithdrawBinancePayload): Promise<unknown> {
    return this.api.post<unknown, IWithdrawBinancePayload>(`${this.baseUri}/create`, payload);
  }
}
