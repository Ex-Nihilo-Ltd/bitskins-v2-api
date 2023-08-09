import { ApiBase } from '../../base/api';
import { AffilateRoutes } from './affiliate';
import { ApiAccessRoutes } from './api_access';
import { ProfileRoutes } from './profile';
import { TwoFARoutes } from './twofa';

export class AccountRoutes {
  public readonly affiliate: AffilateRoutes;
  public readonly api_access: ApiAccessRoutes;
  public readonly profile: ProfileRoutes;
  public readonly twofa: TwoFARoutes;

  constructor(private readonly api: ApiBase) {
    this.affiliate = new AffilateRoutes(this.api);
    this.api_access = new ApiAccessRoutes(this.api);
    this.profile = new ProfileRoutes(this.api);
    this.twofa = new TwoFARoutes(this.api);
  }
}
