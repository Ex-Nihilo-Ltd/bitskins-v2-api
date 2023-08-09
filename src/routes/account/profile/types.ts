import { Currency, IUserNotify, IUserSettings, Language } from '../../common/types';

export interface ICurrentSession {
  id: number; // 1
  steam_id: string; // "76561198000000000"
  email: string; // "example@bitskins.com"
  avatar: string; // "2eebe385c404cb6330c5a74dcdbd69361f73e18f"
  country: string; // "PL"
  status: number; // 1
  steam_username: string; // "Example"
  steam_token: string; // "AAAAAAAA"
  steam_update: number; // 0
  member_since: string; // "2015-01-01T00:00:00.000Z"
  plan_id: number; // 1
  kyc_level: number; // 0
  kyc_required: number; // 1
  bumps: number; // 10
  // TODO: CHECK
  o_settings: number; // 1
  o_notify: number; // 0
  store_alias: string; // "example"
  currency: string; // "USD"
  language: string; // "en"
  created_at: string; // "2023-01-01T00:00:00.563Z"
  balance: number; // 10000
  wbalance: number; // 10000
  lbalance: number; // 2000
  abalance: number; // 8000
  store_hash: string; // "5796d6da57a76814b4599fef270d38deef534831f17bafcf0cd3593cc7a047bb"
  has_password: number; // 1
  has_twofa: number; // 1
  has_apikey: number; // 1
}

export interface IAccountBalance {
  balance: number; // 1000;
  wbalance: number; // 1000;
  lbalance: number; // 100;
}

export interface IUpdateProfilePayload {
  set: {
    o_settings?: number;
    o_notify?: number;
    store_alias?: string;
    currency?: Currency;
    language?: Language;
  };
}

export interface IUpdateTradeLinkPayload {
  tradelink: string;
}

export interface IUpdateTradeLinkResponse {
  steam_token: string;
}
