import { ApiBase } from '../../../base/api';
import { AppId } from '../../common/types';
import { IGetListOfAllItemsInSellResponse } from './types';

export class AllInsellItemsRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/insell';
  }

  public async get_list_of_items_in_sell_for_tf2(): Promise<IGetListOfAllItemsInSellResponse[]> {
    return this.api.get<IGetListOfAllItemsInSellResponse[]>(`${this.baseUri}/${AppId.TF2}`);
  }

  public async get_list_of_items_in_sell_for_dota2(): Promise<IGetListOfAllItemsInSellResponse[]> {
    return this.api.get<IGetListOfAllItemsInSellResponse[]>(`${this.baseUri}/${AppId.DOTA2}`);
  }

  public async get_list_of_items_in_sell_for_csgo(): Promise<IGetListOfAllItemsInSellResponse[]> {
    return this.api.get<IGetListOfAllItemsInSellResponse[]>(`${this.baseUri}/${AppId.CSGO}`);
  }

  public async get_list_of_items_in_sell_for_rust(): Promise<IGetListOfAllItemsInSellResponse[]> {
    return this.api.get<IGetListOfAllItemsInSellResponse[]>(`${this.baseUri}/${AppId.RUST}`);
  }
}
