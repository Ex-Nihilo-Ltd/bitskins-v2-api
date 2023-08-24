import { ApiBase } from '../../../base/api';
import { IWithdrawSingleItemPayload, IWithdrawMultipleItemsPayload, IWithdrawMultipleItemsResponse } from './types';

export class MarketWithdrawRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/withdraw';
  }
  public async withdraw_single_item(payload: IWithdrawSingleItemPayload): Promise<boolean> {
    return this.api.post<boolean, IWithdrawSingleItemPayload>(`${this.baseUri}/single`, payload);
  }
  
  public async withdraw_multiple_items(payload: IWithdrawMultipleItemsPayload): Promise<IWithdrawMultipleItemsResponse[]> {
    return this.api.post<IWithdrawMultipleItemsResponse[], IWithdrawMultipleItemsPayload>(`${this.baseUri}/many`, payload);
  }
}
