import { AppId } from '../../common/types';

export interface IItemPayload {
  id: string;
  external?: IBuyBulkItemsExternal;
}

export interface IBuyBulkItemsExternal {
  steam_id: string;
  steam_token: string;
}

export interface IWithdrawSingleItemPayload extends IItemPayload {
  app_id: AppId;
  id: string;
  external?: {
    steam_id: string;
    steam_token: string;
  } 
}

export interface IWithdrawMultipleItemsPayload {
  items: IWithdrawSingleItemPayload[];
}

export interface IWithdrawMultipleItemsResponse {
  id: string;
  success: boolean;
}
