import { AppId, SteamTradesType } from '../../common/types';

export interface IGetSteamTradesPayload {
  limit?: number;
  offset?: number;
  where?: IGetSteamTradesWhere;
}

export interface IGetSteamTradesWhere {
  tradeofferid?: string;
  app_id?: AppId;
  type?: SteamTradesType;
  hash?: string[];
}
