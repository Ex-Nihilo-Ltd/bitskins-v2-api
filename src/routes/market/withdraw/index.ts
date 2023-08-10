import { ApiBase } from '../../../base/api';
import { IWithdrawSingleItemPayload, IWithdrawMultipleItemsPayload } from './types';

export class MarketWithdrawRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/withdraw';
  }

  public async withdraw_single_item(payload: IWithdrawSingleItemPayload): Promise<unknown> {
    return this.api.post<unknown, IWithdrawSingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async withdraw_multiple_items(payload: IWithdrawMultipleItemsPayload): Promise<unknown> {
    return this.api.post<unknown, IWithdrawMultipleItemsPayload>(`${this.baseUri}/many`, payload);
  }
}
