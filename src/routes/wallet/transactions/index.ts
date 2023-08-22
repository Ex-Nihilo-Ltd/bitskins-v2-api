import { ApiBase } from '../../../base/api';
import {
  IGetWalletPendingTransactionsResponse,
  IGetWalletTransactionsPayload,
  IGetWalletTransactionsResponse,
} from './types';

export class WalletTransactionRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/transaction';
  }

  public async get_wallet_transactions(
    payload: IGetWalletTransactionsPayload,
  ): Promise<IGetWalletTransactionsResponse> {
    return this.api.post<IGetWalletTransactionsResponse, IGetWalletTransactionsPayload>(
      `${this.baseUri}/list`,
      payload,
    );
  }

  public async get_wallet_pending_transactions(
    payload: IGetWalletTransactionsPayload,
  ): Promise<IGetWalletPendingTransactionsResponse> {
    return this.api.post<IGetWalletPendingTransactionsResponse, IGetWalletTransactionsPayload>(
      `${this.baseUri}/list_pending`,
      payload,
    );
  }
}
