import { AppId, BuyOrderField, BuyOrderWhereStatus, Order } from '../../common/types';

export interface ICreateBuyOrderPayload {
  app_id: AppId;
  skin_id: number;
  price: number;
  quantity: number;
}

export interface ICreateBuyOrderBySkinNamePayload {
  app_id: AppId;
  name: string;
  price: number;
  quantity: number;
}

export interface ICheckBuyOrderPositionPayload {
  app_id: AppId;
  skin_id: number;
  price: number;
}

export interface IGetOwnBuyOrdersPayload {
  app_id: AppId;
  skin_id: number;
  limit?: number;
  offset?: number;
}

export interface ICancelBuyOrderPayload {
  app_id: AppId;
  id: string;
}

export interface ICancelMultipleBuyOrdersPayload {
  app_id: AppId;
  ids: string[];
}

export interface ICancelAllBuyOrdersPayload {
  app_id: AppId;
}

export interface IGetBuyOrderSummaryPayload {
  app_id: AppId;
  limit?: number;
  offset?: number;
  where?: IGetBuyOrderSummaryWhere;
}

export interface IGetSkinBuyOrdersPayload {
  limit?: number;
  offset?: number;
  order?: IGetOwnBuyOrdersOrder[];
  where?: IGetOwnBuyOrdersWhere;
}

export interface IGetOwnBuyOrdersOrder {
  field: BuyOrderField;
  order: Order;
}

export interface IGetOwnBuyOrdersWhere {
  app_id?: AppId;
  skin_name?: string;
  status?: BuyOrderWhereStatus[];
  skin_id?: number[];
  price_from?: number;
  price_to?: number;
}

export interface IGetBuyOrderSummaryWhere {
  skin_name?: string;
  skin_id?: number[];
}
