import { CryptoDepositType } from '../../../common/types';
import { CryptoCurrencyType } from '../../../config/currency_rates/types';

export interface ICryptoDepositPayload {
  type: CryptoDepositType;
}

export interface IGetCryptoAddressesResponse {
  address: string;
}

export interface ICryptoAddresses {
  id: number;
  currency: CryptoCurrencyType;
  type: CryptoDepositType;
  address: string;
}
