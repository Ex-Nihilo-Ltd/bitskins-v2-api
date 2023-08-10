import { AppId } from '../../common/types';

export interface IDepositSteamItemsPayload {
  app_id: AppId;
  items: IDepositSteamItems[];
}

export interface IDepositSteamItems {
  asset_id: string;
  price: number;
}
