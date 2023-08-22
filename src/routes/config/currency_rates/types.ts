export enum FiatCurrency {
  USD = 'USD',
  EUR = 'EUR',
  PLN = 'PLN',
  SEK = 'SEK',
  JPY = 'JPY',
  CHF = 'CHF',
  GBP = 'GBP',
}

export enum CryptoCurrencyType {
  BTC = 'BTC',
  LTC = 'LTC',
  ETH = 'ETH',
  BNB = 'BNB',
}

export interface IFiatCurrencyItem {
  locale: string;
  value: number;
}

export interface IGetCurrencyRatesResponse {
  fiat: {
    [key in keyof FiatCurrency]: IFiatCurrencyItem;
  };
  crypto: {
    [key in keyof CryptoCurrencyType]: { value: number };
  };
}
