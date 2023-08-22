import { AppId } from '../../common/types';

export interface IUpdateSingleItemPricePayload {
  app_id: AppId;
  id: string;
  price: number;
}

export interface IUpdateMultipleItemsPricesPayload {
  items: IUpdateSingleItemPricePayload[];
}

export interface IUpdateMultipleItemsPriceResponse {
  id: string;
  success: boolean;
}
