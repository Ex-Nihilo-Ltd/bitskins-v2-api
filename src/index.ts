import { ApiBase } from './base/api';
import { IApiBaseConfig } from './base/api/types';
import { AccountRoutes } from './routes/account';
import { AppId } from './routes/common/types';
import { ConfigRoutes } from './routes/config';
import { MarketRoutes } from './routes/market';
import { SteamRoutes } from './routes/steam';
import { WalletRoutes } from './routes/wallet';

export class BitskinsApiV2 {
  private readonly api: ApiBase;

  public readonly account: AccountRoutes;
  public readonly config: ConfigRoutes;
  public readonly market: MarketRoutes;
  public readonly steam: SteamRoutes;
  public readonly wallet: WalletRoutes;

  constructor(config: IApiBaseConfig) {
    this.api = new ApiBase(config);

    this.account = new AccountRoutes(this.api);
    this.config = new ConfigRoutes(this.api);
    this.market = new MarketRoutes(this.api);
    this.steam = new SteamRoutes(this.api);
    this.wallet = new WalletRoutes(this.api);
  }
}

const api = new BitskinsApiV2({ apiKey: '2a2105fc-d61f-4c40-b3a1-252bab6377d3' }).wallet.transactions
  .get_wallet_pending_transactions({ limit: 30 })
  .then((res) => console.log('res', res))
  .catch((err) => console.error('err', err));
