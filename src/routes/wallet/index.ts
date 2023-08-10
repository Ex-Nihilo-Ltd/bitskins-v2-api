import { ApiBase } from '../../base/api';
import { WalletDepositRoutes } from './deposit';
import { WalletReportRoutes } from './reports';
import { WalletStatsRoutes } from './stats';
import { WalletTransactionRoutes } from './transactions';
import { WalletWithdrawRoutes } from './withdraw';

export class WalletRoutes {
  public readonly deposit: WalletDepositRoutes;
  public readonly reports: WalletReportRoutes;
  public readonly stats: WalletStatsRoutes;
  public readonly transactions: WalletTransactionRoutes;
  public readonly withdraw: WalletWithdrawRoutes;

  constructor(private readonly api: ApiBase) {
    this.deposit = new WalletDepositRoutes(this.api);
    this.reports = new WalletReportRoutes(this.api);
    this.stats = new WalletStatsRoutes(this.api);
    this.transactions = new WalletTransactionRoutes(this.api);
    this.withdraw = new WalletWithdrawRoutes(this.api);
  }
}
