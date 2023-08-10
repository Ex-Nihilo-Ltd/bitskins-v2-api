export interface IAddCardPayload {
  amount: number;
  card: ICardInfo;
  billing_address: IBillingInfo;
}

export interface IDepositCardPayload {
  card_id: number;
  amount: number;
  security_code: string;
}

export interface ICardInfo {
  pan: string;
  holder: string;
  security_code: string;
  expiration: string;
}

export interface IBillingInfo {
  country: string;
  city: string;
  addr_line_1: string;
  addr_line_2: string;
  zip: string;
}
