import { ApiBase } from '../../../../base/api';
import { IUseGiftCodePayload } from './types';

export class WalletDepositGiftCodeRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/deposit/gift_code';
  }

  public async use_gift_code(payload: IUseGiftCodePayload): Promise<unknown> {
    return this.api.post<unknown, IUseGiftCodePayload>(`${this.baseUri}/use`, payload);
  }

  public async get_used_gift_codes(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/list_used`, {});
  }
}
