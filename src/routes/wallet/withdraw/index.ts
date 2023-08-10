import { ApiBase } from '../../../base/api';
import { WalletWithdrawBinanceRoutes } from './binance';
import { WalletWithdrawCryptocurrencyRoutes } from './cryptocurrency';
import { WalletWithdrawP2PRoutes } from './p2p';
import { WalletWithdrawVisaRoutes } from './visa';

export class WalletWithdrawRoutes {
  public readonly binance: WalletWithdrawBinanceRoutes;
  public readonly cryptocurrency: WalletWithdrawCryptocurrencyRoutes;
  public readonly p2p: WalletWithdrawP2PRoutes;
  public readonly visa: WalletWithdrawVisaRoutes;

  constructor(private readonly api: ApiBase) {
    this.binance = new WalletWithdrawBinanceRoutes(this.api);
    this.cryptocurrency = new WalletWithdrawCryptocurrencyRoutes(this.api);
    this.p2p = new WalletWithdrawP2PRoutes(this.api);
    this.visa = new WalletWithdrawVisaRoutes(this.api);
  }
}
