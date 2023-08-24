import { AppId } from '../../common/types';

export interface IGetSalesPayload {
  app_id: AppId;
  skin_id: number;
  limit?: number;
}

export interface IGetPricingSummaryPayload {
  app_id: AppId;
  skin_id: number;
  date_from?: string; // "2023-01-01"
  date_to?: string; // "2023-01-01"
}

export interface IGetPricingSummaryResponse {
  app_id: AppId;
  skin_id: number;
  date: string; // '2023-08-04'
  price_min: number; // 38
  price_max: number; // 38
  price_avg: number; // 38
  counter: number; // 1
}

export interface IGetSalesResponse {
  price: number;
  created_ad: string;
  fload_value: number;
  stickers?: object[];
  phase_id?: string;
}
