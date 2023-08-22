import { ApiBase } from '../../../base/api';
import { IRelistMultipleItemsPayload, IRelistMultipleItemsResponse, IRelistSingleItemPayload } from './types';

export class RelistRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/relist';
  }

  public async relist_single_item(payload: IRelistSingleItemPayload): Promise<boolean> {
    return this.api.post<boolean, IRelistSingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async relist_multiple_item(payload: IRelistMultipleItemsPayload): Promise<IRelistMultipleItemsResponse[]> {
    return this.api.post<IRelistMultipleItemsResponse[], IRelistMultipleItemsPayload>(`${this.baseUri}/many`, payload);
  }
}
