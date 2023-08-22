import { ApiBase } from '../../../base/api';
import { IDelistMultipleItemsPayload, IDelistMultipleItemsResponse, IDelistSingleItemPayload } from './types';

export class DelistRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/delist';
  }

  public async delist_single_item(payload: IDelistSingleItemPayload): Promise<boolean> {
    return this.api.post<boolean, IDelistSingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async delist_multiple_items(payload: IDelistMultipleItemsPayload): Promise<IDelistMultipleItemsResponse[]> {
    return this.api.post<IDelistMultipleItemsResponse[], IDelistMultipleItemsPayload>(`${this.baseUri}/many`, payload);
  }
}
