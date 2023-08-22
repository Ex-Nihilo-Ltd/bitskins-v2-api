import { AppId } from '../../common/types';

export interface IDepositSteamItemsPayload {
  app_id: AppId;
  items: IDepositSteamItems[];
}

export interface IDepositSteamItems {
  asset_id: string;
  price: number;
}

export interface IDespositSteamItemsResponse {
  available: string[];
  missing: string[];
  not_accepting: string[];
  wrong_price: string[];
  locked: string[];
  hash: string;
  trade: { tradeofferid: string };
}
