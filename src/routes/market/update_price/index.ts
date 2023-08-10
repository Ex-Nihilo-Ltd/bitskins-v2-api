import { ApiBase } from '../../../base/api';
import { IUpdateMultipleItemsPricesPayload, IUpdateSingleItemPricePayload } from './types';

export class UpdatePriceRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/update_price';
  }

  public async update_single_item_price(payload: IUpdateSingleItemPricePayload): Promise<unknown> {
    return this.api.post<unknown, IUpdateSingleItemPricePayload>(`${this.baseUri}/single`, payload);
  }

  public async update_multiple_items_prices(payload: IUpdateMultipleItemsPricesPayload): Promise<unknown> {
    return this.api.post<unknown, IUpdateMultipleItemsPricesPayload>(`${this.baseUri}/many`, payload);
  }
}
