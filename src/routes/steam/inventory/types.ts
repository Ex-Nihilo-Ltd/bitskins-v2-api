import { AppId } from '../../common/types';

export interface IGetSteamInventoryPayload {
  app_id: AppId;
}

export interface IGetSteamInventoryResponse {
  name: string;
  asset_id: string;
  class_id: string;
  float_id: string;
  tradable: number;
  skin_id: number;
  suggested_price: number;
  skin_status: number;
  exterior_id: number;
}
