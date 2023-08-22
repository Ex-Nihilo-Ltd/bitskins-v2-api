import { ApiBase } from '../../../base/api';
import { IUpdateMultipleItemsPriceResponse, IUpdateMultipleItemsPricesPayload, IUpdateSingleItemPricePayload } from './types';

export class UpdatePriceRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/update_price';
  }

  public async update_single_item_price(payload: IUpdateSingleItemPricePayload): Promise<boolean> {
    return this.api.post<boolean, IUpdateSingleItemPricePayload>(`${this.baseUri}/single`, payload);
  }

  public async update_multiple_items_prices(payload: IUpdateMultipleItemsPricesPayload): Promise<IUpdateMultipleItemsPriceResponse[]> {
    return this.api.post<IUpdateMultipleItemsPriceResponse[], IUpdateMultipleItemsPricesPayload>(`${this.baseUri}/many`, payload);
  }
}
