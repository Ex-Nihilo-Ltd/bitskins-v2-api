import { ApiBase } from '../../../base/api';
import {
  IDisableTwoFACodePayload,
  IUnlockTwoFAPayload,
  IVerifyDisablingTwoFACodePayload,
  IVerifyTwoFACodePayload,
} from './types';

export class TwoFARoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/account/twofa';
  }

  public async create_twofa_code(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/create`, {});
  }

  public async verify_twofa_code(payload: IVerifyTwoFACodePayload): Promise<unknown> {
    return this.api.post<unknown, IVerifyTwoFACodePayload>(`${this.baseUri}/verify`, payload);
  }

  public async disable_twofa_code(payload: IDisableTwoFACodePayload): Promise<unknown> {
    return this.api.post<unknown, IDisableTwoFACodePayload>(`${this.baseUri}/disable`, payload);
  }

  public async verify_disabling_twfa_code(payload: IVerifyDisablingTwoFACodePayload): Promise<unknown> {
    return this.api.post<unknown, IVerifyDisablingTwoFACodePayload>(`${this.baseUri}/verify_disable`, payload);
  }

  public async lock_twofa(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/lock`, {});
  }

  public async unlock_twofa(payload: IUnlockTwoFAPayload): Promise<unknown> {
    return this.api.post<unknown, IUnlockTwoFAPayload>(`${this.baseUri}/unlock`, payload);
  }
}
