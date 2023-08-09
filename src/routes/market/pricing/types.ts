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
