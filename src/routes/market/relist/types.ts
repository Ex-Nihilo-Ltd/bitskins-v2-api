import { AppId, DepositStatus } from '../../common/types';

export interface IRelistSingleItemPayload {
  app_id: AppId;
  id: string;
  price: number;
  type: DepositStatus;
}

export interface IRelistMultipleItemsPayload {
  items: IRelistSingleItemPayload[];
}
