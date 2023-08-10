import { AppId } from '../../common/types';

export interface IDelistSingleItemPayload {
  app_id: AppId;
  id: string;
}

export interface IDelistMultipleItemsPayload {
  items: IDelistSingleItemPayload[];
}
