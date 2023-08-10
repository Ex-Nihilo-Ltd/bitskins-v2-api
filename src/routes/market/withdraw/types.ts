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
}

export interface IWithdrawMultipleItemsPayload {
  items: IWithdrawSingleItemPayload[];
}
