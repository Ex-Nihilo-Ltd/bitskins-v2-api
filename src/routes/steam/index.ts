import { ApiBase } from '../../base/api';
import { SteamDepositRoutes } from './deposit';
import { SteamInventoryRoutes } from './inventory';
import { SteamTradesRoutes } from './trades';

export class SteamRoutes {
  public readonly deposit: SteamDepositRoutes;
  public readonly inventory: SteamInventoryRoutes;
  public readonly trades: SteamTradesRoutes;

  constructor(private readonly api: ApiBase) {
    this.deposit = new SteamDepositRoutes(this.api);
    this.inventory = new SteamInventoryRoutes(this.api);
    this.trades = new SteamTradesRoutes(this.api);
  }
}
