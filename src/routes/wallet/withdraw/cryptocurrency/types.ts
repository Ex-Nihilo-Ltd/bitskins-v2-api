export interface IWithdrawCryptoPayload {
  twofa_code: string;
  amount: number;
  address: string;
}
