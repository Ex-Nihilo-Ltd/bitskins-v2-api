import { ApiBase } from '../../../../base/api';
import { IDepositZenPayload } from './types';

export class WalletDepositZenRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/deposit/zen';
  }

  public async use_gift_code(payload: IDepositZenPayload): Promise<unknown> {
    return this.api.post<unknown, IDepositZenPayload>(`${this.baseUri}/create`, payload);
  }
}
