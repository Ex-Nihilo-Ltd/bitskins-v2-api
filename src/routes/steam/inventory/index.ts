import { ApiBase } from '../../../base/api';
import { IGetSteamInventoryPayload } from './types';

export class SteamInventoryRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/steam/inventory';
  }

  public async get_steam_inventory(payload: IGetSteamInventoryPayload): Promise<unknown> {
    return this.api.post<unknown, IGetSteamInventoryPayload>(`${this.baseUri}/list`, payload);
  }
}
