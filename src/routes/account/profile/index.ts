import { ApiBase } from '../../../base/api';
import {
  IAccountBalance,
  ICurrentSession,
  IUpdateProfilePayload,
  IUpdateTradeLinkPayload,
  IUpdateTradeLinkResponse,
} from './types';

export class ProfileRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/account/profile';
  }

  public async get_current_session(): Promise<ICurrentSession> {
    return this.api.get<ICurrentSession>(`${this.baseUri}/me`);
  }

  public async get_account_balance(): Promise<IAccountBalance> {
    return this.api.post<IAccountBalance, {}>(`${this.baseUri}/balance`, {});
  }

  public async update_account(payload: IUpdateProfilePayload): Promise<boolean> {
    return this.api.post<boolean, IUpdateProfilePayload>(`${this.baseUri}/update`, payload);
  }

  public async update_trade_link(payload: IUpdateTradeLinkPayload): Promise<IUpdateTradeLinkResponse> {
    return this.api.post<IUpdateTradeLinkResponse, IUpdateTradeLinkPayload>(
      `${this.baseUri}/update_tradelink`,
      payload,
    );
  }

  public async block_my_account(): Promise<void> {
    return this.api.post<void>(`${this.baseUri}/block`, {});
  }
}
