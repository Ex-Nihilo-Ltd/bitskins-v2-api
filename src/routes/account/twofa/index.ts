import { ApiBase } from '../../../base/api';
import {
  ICreateTwoFAResponse,
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

  public async create_twofa_code(): Promise<ICreateTwoFAResponse> {
    return this.api.post<ICreateTwoFAResponse>(`${this.baseUri}/create`, {});
  }

  public async verify_twofa_code(payload: IVerifyTwoFACodePayload): Promise<boolean> {
    return this.api.post<boolean, IVerifyTwoFACodePayload>(`${this.baseUri}/verify`, payload);
  }

  public async disable_twofa_code(payload: IDisableTwoFACodePayload): Promise<boolean> {
    return this.api.post<boolean, IDisableTwoFACodePayload>(`${this.baseUri}/disable`, payload);
  }

  public async verify_disabling_twofa_code(payload: IVerifyDisablingTwoFACodePayload): Promise<boolean> {
    return this.api.post<boolean, IVerifyDisablingTwoFACodePayload>(`${this.baseUri}/verify_disable`, payload);
  }

  public async lock_twofa(): Promise<boolean> {
    return this.api.post<boolean>(`${this.baseUri}/lock`, {});
  }

  public async unlock_twofa(payload: IUnlockTwoFAPayload): Promise<boolean> {
    return this.api.post<boolean, IUnlockTwoFAPayload>(`${this.baseUri}/unlock`, payload);
  }
}
