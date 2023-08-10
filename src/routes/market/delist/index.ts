import { ApiBase } from '../../../base/api';
import { IDelistMultipleItemsPayload, IDelistSingleItemPayload } from './types';

export class DelistRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/delist';
  }

  public async delist_single_item(payload: IDelistSingleItemPayload): Promise<unknown> {
    return this.api.post<unknown, IDelistSingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async delist_multiple_items(payload: IDelistMultipleItemsPayload): Promise<unknown> {
    return this.api.post<unknown, IDelistMultipleItemsPayload>(`${this.baseUri}/many`, payload);
  }
}
