import { AppId } from '../../common/types';

export interface IBuyItemPayload {
  id: string;
  max_price: number;
  hash?: string;
}

export interface IBuySingleItemPayload extends IBuyItemPayload {
  app_id?: AppId; // default AppId.CSGO
  id: string;
  max_price: number;
  hash?: string;
}

export interface IBuyMultipleItemsPayload {
  app_id?: AppId; // default AppId.CSGO
  items: IBuyItemPayload[];
}

export interface IBuyBulkItemsPayload {
  app_id?: AppId; // default AppId.CSGO
  skin_id: number;
  max_price: number;
  quantity: number;
}

export interface IBuySingleItemResponse {
  receipt_id: string;
}

export interface IBuyMultipleItemsResponse {
  result: { id: string; success: boolean }[];
}

export interface IBuyBulkItemsResponse {
  result: { id: string; success: boolean }[];
  receipt_id: string;
}
