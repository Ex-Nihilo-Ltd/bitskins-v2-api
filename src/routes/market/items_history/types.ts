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
