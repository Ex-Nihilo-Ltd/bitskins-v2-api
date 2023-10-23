import { AppId, ICounter, ItemStatus, SteamTradesType } from '../../common/types';

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

export interface ISteamTradeItem {
  tradeofferid: string;
  bot_id: number;
  user_id: number;
  steam_id: string;
  tradeid: null;
  hash: string;
  trade_offer_state: number;
  items_to_receive: [];
  time_created: number;
  time_updated: number;
  escrow_end_date: number;
  trade_type: number;
  app_id: number;
  status?: ItemStatus | null;
  bot: [Object];
}

export interface IGetSteamTradesResponse {
  counter: ICounter;
  list: ISteamTradeItem[];
}

export interface IActiveSteamTradesResponse {
  counter: ICounter;
  list: ISteamTradeItem[];
}
