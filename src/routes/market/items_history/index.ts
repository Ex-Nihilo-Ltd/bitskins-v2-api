import { ApiBase } from '../../../base/api';
import { IGetItemHistoryPayload, IGetItemsHistoryPayload } from './types';

export class ItemsHistoryRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/history';
  }

  public async get_items_history(payload: IGetItemsHistoryPayload): Promise<unknown> {
    return this.api.post<unknown, IGetItemsHistoryPayload>(`${this.baseUri}/list`, payload);
  }

  public async get_item_history(payload: IGetItemHistoryPayload): Promise<unknown> {
    return this.api.post<unknown, IGetItemHistoryPayload>(`${this.baseUri}/get`, payload);
  }
}
