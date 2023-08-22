import { ApiBase } from '../../../base/api';
import { IBuyBulkItemsPayload, IBuyBulkItemsResponse, IBuyMultipleItemsPayload, IBuyMultipleItemsResponse, IBuySingleItemPayload, IBuySingleItemResponse } from './types';

export class BuyItemRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/buy';
  }

  public async buy_single_item(payload: IBuySingleItemPayload): Promise<IBuySingleItemResponse> {
    return this.api.post<IBuySingleItemResponse, IBuySingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async buy_multiple_items(payload: IBuyMultipleItemsPayload): Promise<IBuyMultipleItemsResponse> {
    return this.api.post<IBuyMultipleItemsResponse, IBuyMultipleItemsPayload>(`${this.baseUri}/many`, payload);
  }

  public async buy_bulk_items(payload: IBuyBulkItemsPayload): Promise<IBuyBulkItemsResponse> {
    return this.api.post<IBuyBulkItemsResponse, IBuyBulkItemsPayload>(`${this.baseUri}/bulk`, payload);
  }
}
