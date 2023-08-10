import { ApiBase } from '../../../base/api';
import { IGetWalletTransactionsPayload } from './types';

export class WalletTransactionRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/transaction';
  }

  public async get_wallet_transactions(payload: IGetWalletTransactionsPayload): Promise<unknown> {
    return this.api.post<unknown, IGetWalletTransactionsPayload>(`${this.baseUri}/list`, payload);
  }

  public async get_wallet_pending_transactions(payload: IGetWalletTransactionsPayload): Promise<unknown> {
    return this.api.post<unknown, IGetWalletTransactionsPayload>(`${this.baseUri}/list_pending`, payload);
  }
}
