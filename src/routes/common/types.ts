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

export enum Order {
  asc = 'ASC',
  desc = 'DESC',
}

export enum ItemHistoryField {
  id = 'id',
  price = 'price',
}

export enum BuyOrderField {
  app_id = 'app_id',
  skin_name = 'skin_name',
  status = 'status',
  price = 'price',
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

export enum BuyOrderWhereStatus {
  MINUS_ONE = -1,
  ZERO = 0,
  ONE = 1,
  TWO = 2,
}

export enum DepositStatus {
  public = 1,
  private = 2,
  instant_sell = 3,
}

export enum MarketHistoryStatus {
  seller = 'seller',
  buyer = 'buyer',
}

export enum AutoBumpPeriod {
  hour_1 = 60,
  hour_3 = 180,
  hour_6 = 360,
  hour_12 = 720,
  hour_24 = 1440,
  hour_48 = 2880,
}

export enum AutoBumpStatus {
  not_enough_bumps = -3,
  finished = -2,
  cancelled = -1,
  pending = 0,
  active = 1,
}

export enum SteamTradesType {
  ONE = 1,
  TWO = 2,
}

export enum BumpPackage {
  TEN = 1,
  TWENTY = 2,
  FIFTY = 3,
  SEVENTY_FIVE = 4,
}

export enum BumpPackageDiscount {
  TEN = 5,
  TWENTY = 8,
  FIFTY = 10,
  SEVENTY_FIVE = 13,
}

export enum WalletTransactionsField {
  id = 'id',
  amount = 'amount',
}

export enum WalletTransactionsServiceId {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  THIRTY = 30,
  THIRTY_ONE = 31,
  THIRTY_TWO = 32,
  THIRTY_THREE = 33,
  THIRTY_FOUR = 34,
  THIRTY_FIVE = 35,
  THIRTY_SIX = 36,
  FIFTY = 50,
  FIFTY_ONE = 51,
  FIFTY_TWO = 52,
  FIFTY_THREE = 53,
  FIFTY_FOUR = 54,
  FIFTY_FIVE = 55,
  FIFTY_SIX = 56,
  FIFTY_SEVEN = 57,
  EIGHTY = 80,
  EIGHTY_ONE = 81,
  HUNDRED = 100,
  HUNDRED_ONE = 101,
  HUNDRED_TWO = 102,
}

export enum WalletReportsOrderType {
  id = 'id',
}

export enum ReportStatus {
  empty = -1,
  pending = 0,
  done = 1,
}

export enum ReportType {
  balance = 1,
  sell = 2,
  buy = 3,
}

export enum CryptoDepositType {
  legacy = 'legacy',
  p2sh = 'p2sh-segwit',
  bech32 = 'bech32',
}

export enum WithdrawBinanceReceiverType {
  pay_id = 'PAY_ID',
  binance_id = 'BINANCE_ID',
  email = 'EMAIL',
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

export interface ICounter {
  total: number;
  filtered: number;
}

export interface IBuyBulkItemsExternal {
  steam_id: string;
  steam_token: string;
}
