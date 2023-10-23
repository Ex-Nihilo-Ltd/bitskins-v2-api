import { ApiBase } from '../../../../base/api';
import { CryptoDepositType } from '../../../common/types';
import { ICryptoAddresses, ICryptoDepositPayload, IGetCryptoAddressesResponse } from './types';

export class WalletDepositCryptocurrencyRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/deposit/crypto';
  }

  public async get_crypto_addresses(): Promise<ICryptoAddresses[]> {
    return this.api.post<ICryptoAddresses[]>(`${this.baseUri}/list_addresses`, {});
  }

  public async get_ltc_address(payload: ICryptoDepositPayload): Promise<IGetCryptoAddressesResponse> {
    return this.api.post<IGetCryptoAddressesResponse, ICryptoDepositPayload>(
      `${this.baseUri}/get_litecoin_address`,
      payload,
    );
  }

  public async get_btc_address(payload: ICryptoDepositPayload): Promise<IGetCryptoAddressesResponse> {
    return this.api.post<IGetCryptoAddressesResponse, ICryptoDepositPayload>(
      `${this.baseUri}/get_bitcoin_address`,
      payload,
    );
  }

  public async get_eth_address(): Promise<IGetCryptoAddressesResponse> {
    return this.api.post<IGetCryptoAddressesResponse>(`${this.baseUri}/get_ethereum_address`, {
      type: CryptoDepositType.legacy,
    });
  }
}
