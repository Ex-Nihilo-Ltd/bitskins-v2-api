export interface IWithdrawVisaPayload {
  card_id: number;
  amount: number;
  security_code: string;
  twofa_code: string;
}
