import { ApiBase } from '../../../base/api';
import { IGetSteamInventoryPayload, IGetSteamInventoryResponse } from './types';

export class SteamInventoryRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/steam/inventory';
  }

  public async get_steam_inventory(payload: IGetSteamInventoryPayload): Promise<IGetSteamInventoryResponse[]> {
    return this.api.post<IGetSteamInventoryResponse[], IGetSteamInventoryPayload>(`${this.baseUri}/list`, payload);
  }
}
