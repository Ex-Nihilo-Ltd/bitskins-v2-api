import { ApiBase } from '../../../base/api';
import { WalletDepositBinanceRoutes } from './binance';
import { WalletDepositCardRoutes } from './card';
import { WalletDepositCryptocurrencyRoutes } from './cryptocurrency';
import { WalletDepositGiftCodeRoutes } from './gift_code';
import { WalletDepositZenRoutes } from './zen';

export class WalletDepositRoutes {
  public readonly binance: WalletDepositBinanceRoutes;
  public readonly card: WalletDepositCardRoutes;
  public readonly cryptocurrency: WalletDepositCryptocurrencyRoutes;
  public readonly gift_code: WalletDepositGiftCodeRoutes;
  public readonly zen: WalletDepositZenRoutes;

  constructor(private readonly api: ApiBase) {
    this.binance = new WalletDepositBinanceRoutes(this.api);
    this.card = new WalletDepositCardRoutes(this.api);
    this.cryptocurrency = new WalletDepositCryptocurrencyRoutes(this.api);
    this.gift_code = new WalletDepositGiftCodeRoutes(this.api);
    this.zen = new WalletDepositZenRoutes(this.api);
  }
}
