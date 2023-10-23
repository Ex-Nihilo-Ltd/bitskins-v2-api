import { ApiBase } from '../../../base/api';
import { IDepositSteamItemsPayload, IDespositSteamItemsResponse } from './types';

export class SteamDepositRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/steam/deposit';
  }

  public async deposit_steam_items(payload: IDepositSteamItemsPayload): Promise<IDespositSteamItemsResponse> {
    return this.api.post<IDespositSteamItemsResponse, IDepositSteamItemsPayload>(`${this.baseUri}/many`, payload);
  }
}
