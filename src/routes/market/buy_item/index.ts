import { ApiBase } from '../../../base/api';
import { IBuyBulkItemsPayload, IBuyMultipleItemsPayload, IBuySingleItemPayload } from './types';

export class BuyItemRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/buy';
  }

  public async buy_single_item(payload: IBuySingleItemPayload): Promise<unknown> {
    return this.api.post<unknown, IBuySingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async buy_multiple_items(payload: IBuyMultipleItemsPayload): Promise<unknown> {
    return this.api.post<unknown, IBuyMultipleItemsPayload>(`${this.baseUri}/many`, payload);
  }

  public async buy_bulk_items(payload: IBuyBulkItemsPayload): Promise<unknown> {
    return this.api.post<unknown, IBuyBulkItemsPayload>(`${this.baseUri}/bulk`, payload);
  }
}
