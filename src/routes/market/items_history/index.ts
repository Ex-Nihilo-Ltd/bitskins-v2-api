import { ApiBase } from '../../../base/api';
import { IGetItemHistoryData, IGetItemHistoryPayload, IGetItemsHistoryPayload, IGetItemsHistoryResponse } from './types';

export class ItemsHistoryRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/history';
  }

  public async get_items_history(payload: IGetItemsHistoryPayload): Promise<IGetItemsHistoryResponse> {
    return this.api.post<IGetItemsHistoryResponse, IGetItemsHistoryPayload>(`${this.baseUri}/list`, payload);
  }

  public async get_item_history(payload: IGetItemHistoryPayload): Promise<IGetItemHistoryData> {
    return this.api.post<IGetItemHistoryData, IGetItemHistoryPayload>(`${this.baseUri}/get`, payload);
  }
}
