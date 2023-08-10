import { ApiBase } from '../../../base/api';
import { IDepositSteamItemsPayload } from './types';

export class SteamDepositRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/steam/deposit';
  }

  public async deposit_steam_items(payload: IDepositSteamItemsPayload): Promise<unknown> {
    return this.api.post<unknown, IDepositSteamItemsPayload>(`${this.baseUri}/many`, payload);
  }
}
