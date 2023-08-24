import { AppId, ItemHistoryField, MarketHistoryStatus, Order } from '../../common/types';

export interface IGetItemHistoryPayload {
  type: MarketHistoryStatus;
  id: string;
}

export interface IGetItemsHistoryPayload {
  type: MarketHistoryStatus;
  limit?: number;
  offset?: number;
  order?: IGetItemsHistoryOrder[];
  where?: IGetItemsHistoryWhere;
}

export interface IGetItemsHistoryOrder {
  field: ItemHistoryField;
  order: Order;
}

export interface IGetItemsHistoryWhere {
  app_id?: AppId;
  skin_id?: number;
  price_from?: number;
  price_to?: number;
}

export interface IGetItemsHistoryCounter {
  total: number;
  filtered: number;
}

export interface IGetItemHistoryData {
  id: string,
  item_id: string,
  app_id: AppId,
  skin_id: number,
  price: number,
  created_at: string,
  fee: number,
  buyer_country: string,
  name: string,
  class_id: string
}

export interface IGetItemsHistoryResponse {
  counter: IGetItemsHistoryCounter;
  list: IGetItemHistoryData[]
}
