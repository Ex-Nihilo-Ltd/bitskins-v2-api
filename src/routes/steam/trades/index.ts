import { ApiBase } from '../../../base/api';
import { IGetSteamTradesPayload } from './types';

export class SteamTradesRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/steam/trade';
  }

  public async get_steam_trades(payload: IGetSteamTradesPayload): Promise<unknown> {
    return this.api.post<unknown, IGetSteamTradesPayload>(`${this.baseUri}/list`, payload);
  }

  public async get_active_steam_trades(payload: IGetSteamTradesPayload): Promise<unknown> {
    return this.api.post<unknown, IGetSteamTradesPayload>(`${this.baseUri}/active`, payload);
  }

  public async get_hashes_of_active_steam_trades(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/active_hash`, {});
  }
}
