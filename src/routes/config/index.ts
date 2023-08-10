import { ApiBase } from '../../base/api';
import { CurrencyRateRoutes } from './currency_rates';
import { FeePlanRoutes } from './fee_plans';
import { PlatformStatusRoutes } from './platform_status';

export class ConfigRoutes {
  public readonly currency_rates: CurrencyRateRoutes;
  public readonly fee_plans: FeePlanRoutes;
  public readonly platform_status: PlatformStatusRoutes;

  constructor(private readonly api: ApiBase) {
    this.currency_rates = new CurrencyRateRoutes(this.api);
    this.fee_plans = new FeePlanRoutes(this.api);
    this.platform_status = new PlatformStatusRoutes(this.api);
  }
}
