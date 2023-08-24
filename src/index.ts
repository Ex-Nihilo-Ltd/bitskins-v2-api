import { ApiBase } from './base/api';
import { IApiBaseConfig } from './base/api/types';
import { AccountRoutes } from './routes/account';
import { ConfigRoutes } from './routes/config';
import { MarketRoutes } from './routes/market';
import { SocketRoutes } from './routes/sockets';
import { SteamRoutes } from './routes/steam';
import { WalletRoutes } from './routes/wallet';

export class BitskinsApiV2 {
  private readonly api: ApiBase;

  public readonly account: AccountRoutes;
  public readonly config: ConfigRoutes;
  public readonly market: MarketRoutes;
  public readonly steam: SteamRoutes;
  public readonly wallet: WalletRoutes;

  public readonly socket: SocketRoutes;

  constructor(config: IApiBaseConfig) {
    this.api = new ApiBase(config);

    this.account = new AccountRoutes(this.api);
    this.config = new ConfigRoutes(this.api);
    this.market = new MarketRoutes(this.api);
    this.steam = new SteamRoutes(this.api);
    this.wallet = new WalletRoutes(this.api);

    this.socket = new SocketRoutes(config);
  }
}

export * from './base/api/types';
export * from './base/error/types';

export * from './routes/account/types';
export * from './routes/common/types';
export * from './routes/market/types';
export * from './routes/steam/types';
export * from './routes/wallet/types';

export * from './routes/sockets/types';
