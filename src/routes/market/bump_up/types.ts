import { AppId, AutoBumpPeriod, BumpPackage } from '../../common/types';

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
