export enum Currency {
  USD = 'USD',
  PLN = 'PLN',
  BTC = 'BTC',
  LTC = 'LTC',
  ETH = 'ETH',
  EUR = 'EUR',
}

export enum Language {
  en = 'en',
  pl = 'pl',
}

export enum SessionStatus {
  banned = -1,
  blocked = 0,
  active = 1,
  required = 2,
  timeout = 3,
  fully_active = 4,
}

export enum PlatformStatus {
  loading = -2,
  offline = -1,
  steam_down = 0,
  active = 1,
}

export enum AppId {
  CSGO = 730,
  DOTA2 = 570,
  TF2 = 440,
  RUST = 252490,
}

export enum ItemStatus {
  THREE = 3,
  TWO = 2,
  FOUR = 4,
  ZERO = 0,
  FIVE = 5,
  SIX = 6,
  MINUS_FOUR = -4,
}

export type INumberBoolean = 0 | 1;

export interface IUserSettings {
  show_balance: INumberBoolean; // default 1
  show_store: INumberBoolean; // default 1
  email_inventory_sold: INumberBoolean; // default 1
  email_inventory_bought: INumberBoolean; // default 0
  email_marketing: INumberBoolean; // default 0
}

export interface IUserNotify {
  account_new_login_discord: INumberBoolean; // default 0
  account_new_login_telegram: INumberBoolean; // default 0
  inventory_sold_discord: INumberBoolean; // default 0
  inventory_sold_telegram: INumberBoolean; // default 0
  inventory_buyorder_filled_discord: INumberBoolean; // default 0
  inventory_buyorder_filled_telegram: INumberBoolean; // default 0
  wallet_deposit_done_discord: INumberBoolean; // default 0
  wallet_deposit_done_telegram: INumberBoolean; // default 0
  wallet_deposit_pending_discord: INumberBoolean; // default 0
  wallet_deposit_pending_telegram: INumberBoolean; // default 0
  wallet_withdraw_done_discord: INumberBoolean; // default 0
  wallet_withdraw_done_telegram: INumberBoolean; // default 0
  wallet_withdraw_pending_discord: INumberBoolean; // default 0
  wallet_withdraw_pending_telegram: INumberBoolean; // default 0
  support_new_reply_discord: INumberBoolean; // default 0
  support_new_reply_telegram: INumberBoolean; // default 0
  support_ticket_closed_discord: INumberBoolean; // default 0
  support_ticket_closed_telegram: INumberBoolean; // default 0
  inventory_bargain_received_discord: INumberBoolean; // default 0
  inventory_bargain_received_telegram: INumberBoolean; // default 0
}
