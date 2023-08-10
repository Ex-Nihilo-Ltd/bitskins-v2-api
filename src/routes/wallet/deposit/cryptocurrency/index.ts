import { ApiBase } from '../../../../base/api';
import { CryptoDepositType } from '../../../common/types';
import { ICryptoDepositPayload } from './types';

export class WalletDepositCryptocurrencyRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/deposit/crypto';
  }

  public async get_crypto_addresses(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/list_addresses`, {});
  }

  public async get_ltc_address(payload: ICryptoDepositPayload): Promise<unknown> {
    return this.api.post<unknown, ICryptoDepositPayload>(`${this.baseUri}/get_litecoin_address`, payload);
  }

  public async get_btc_address(payload: ICryptoDepositPayload): Promise<unknown> {
    return this.api.post<unknown, ICryptoDepositPayload>(`${this.baseUri}/get_bitcoin_address`, payload);
  }

  public async get_eth_address(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/get_ethereum_address`, { type: CryptoDepositType.legacy });
  }
}
