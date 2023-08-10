import { ApiBase } from '../../../base/api';
import { IGetListOfAllItemsInSellPayload } from './types';

export class AllInsellItemsRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/insell';
  }

  public async get_list_of_all_items_in_sell(payload: IGetListOfAllItemsInSellPayload): Promise<unknown> {
    return this.api.post<unknown, IGetListOfAllItemsInSellPayload>(`${this.baseUri}/summary`, payload);
  }
}
