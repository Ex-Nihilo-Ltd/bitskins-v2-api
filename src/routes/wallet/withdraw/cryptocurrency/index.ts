import { ApiBase } from '../../../../base/api';
import { IWithdrawCryptoPayload } from './types';

export class WalletWithdrawCryptocurrencyRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/withdraw/crypto';
  }

  public async withdraw_litecoin(payload: IWithdrawCryptoPayload): Promise<unknown> {
    return this.api.post<unknown, IWithdrawCryptoPayload>(`${this.baseUri}/litecoin`, payload);
  }

  public async withdraw_bitcoin(payload: IWithdrawCryptoPayload): Promise<unknown> {
    return this.api.post<unknown, IWithdrawCryptoPayload>(`${this.baseUri}/bitcoin`, payload);
  }

  public async withdraw_ethereum(payload: IWithdrawCryptoPayload): Promise<unknown> {
    return this.api.post<unknown, IWithdrawCryptoPayload>(`${this.baseUri}/ethereum`, payload);
  }
}
