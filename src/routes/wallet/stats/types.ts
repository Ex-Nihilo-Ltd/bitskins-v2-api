export interface IGetWalletStatsResponse {
  seller_id: number;
  total_sale_revenue: number;
  total_sale_profit: number;
  counter: number;
}

export interface IGetKYCLimitsResponse {
  deposit: { crypto: {}; non_crypto: {} };
  withdraw: { crypto: {}; non_crypto: {} };
}
