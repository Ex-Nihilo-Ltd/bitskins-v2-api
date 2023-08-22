import { AppId, IBuyBulkItemsExternal } from '../../common/types';

export interface IWithdrawItemPayload {
  id: string;
  external?: IBuyBulkItemsExternal;
}

export interface IWithdrawSingleItemPayload extends IWithdrawItemPayload {
  app_id: AppId;
  id: string;
  external?: {
    steam_id: string;
    steam_token: string;
  };
}

export interface IWithdrawMultipleItemsPayload {
  items: IWithdrawSingleItemPayload[];
}

export interface IWithdrawMultipleItemsResponse {
  id: string;
  success: boolean;
}
