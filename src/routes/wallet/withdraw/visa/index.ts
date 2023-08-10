import { ApiBase } from '../../../../base/api';
import { IWithdrawVisaPayload } from './types';

export class WalletWithdrawVisaRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/withdraw/unlimint';
  }

  public async withdraw_visa(payload: IWithdrawVisaPayload): Promise<unknown> {
    return this.api.post<unknown, IWithdrawVisaPayload>(`${this.baseUri}/card_withdraw`, payload);
  }
}
