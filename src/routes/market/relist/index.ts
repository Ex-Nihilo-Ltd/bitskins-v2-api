import { ApiBase } from '../../../base/api';
import { IRelistMultipleItemsPayload, IRelistSingleItemPayload } from './types';

export class RelistRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/relist';
  }

  public async relist_single_item(payload: IRelistSingleItemPayload): Promise<unknown> {
    return this.api.post<unknown, IRelistSingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async relist_multiple_item(payload: IRelistMultipleItemsPayload): Promise<unknown> {
    return this.api.post<unknown, IRelistMultipleItemsPayload>(`${this.baseUri}/many`, payload);
  }
}
