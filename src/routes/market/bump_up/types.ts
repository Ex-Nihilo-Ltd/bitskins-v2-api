import { AppId, AutoBumpPeriod, BumpPackage } from '../../common/types';
import { ICounter } from '../../common/types';

export interface IBumpSingleItemPayload {
  app_id: AppId;
  id: string;
}

export interface IGetBumpedItemsPayload {
  app_id: AppId;
}

export interface IEnableBumpingPayload {
  app_id: AppId;
  id: string;
  period: AutoBumpPeriod;
  quantity: number;
  delayed: number;
}

export interface IDisableBumpingPayload {
  app_id: AppId;
  id: string;
}

export interface IBuyBumpsPackagePayload {
  id: BumpPackage;
}

export interface IBumpedItem {
  id: string;
  user_id: number;
  quantity: number;
  period: number;
  status: number;
  created_at: string;
  updated_at: string;
  next_bump_at: null;
  name: string;
  class_id: string;
  float_value?: number;
}

export interface IGetBumpedItemsResponse {
  counter: ICounter;
  list: IBumpedItem[];
}
