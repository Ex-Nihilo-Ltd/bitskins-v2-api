import { ApiBase } from '../../../base/api';
import { AppId } from '../../common/types';
import {
  ISearchCSGOPayload,
  ISearchDota2Payload,
  ISearchFiltersPayload,
  ISearchItemDetailsPayload,
  ISearchRustPayload,
  ISearchSkinPayload,
  ISearchStorePayload,
  ISearchTF2Payload,
} from './types';

export class MarketItemsRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/search';
  }

  public async search_tf2(payload: ISearchTF2Payload): Promise<unknown> {
    return this.api.post<unknown, ISearchTF2Payload>(`${this.baseUri}/${AppId.TF2}`, payload);
  }

  public async search_dota2(payload: ISearchDota2Payload): Promise<unknown> {
    return this.api.post<unknown, ISearchDota2Payload>(`${this.baseUri}/${AppId.DOTA2}`, payload);
  }

  public async search_csgo(payload: ISearchCSGOPayload): Promise<unknown> {
    return this.api.post<unknown, ISearchCSGOPayload>(`${this.baseUri}/${AppId.CSGO}`, payload);
  }

  public async search_rust(payload: ISearchRustPayload): Promise<unknown> {
    return this.api.post<unknown, ISearchRustPayload>(`${this.baseUri}/${AppId.RUST}`, payload);
  }

  public async search_store(payload: ISearchStorePayload): Promise<unknown> {
    return this.api.post<unknown, ISearchStorePayload>(`${this.baseUri}/store`, payload);
  }

  public async get_item_details(payload: ISearchItemDetailsPayload): Promise<unknown> {
    return this.api.post<unknown, ISearchItemDetailsPayload>(`${this.baseUri}/get`, payload);
  }

  public async search_skin(payload: ISearchSkinPayload): Promise<unknown> {
    return this.api.post<unknown, ISearchSkinPayload>(`${this.baseUri}/skin_name`);
  }

  public async get_filters(payload: ISearchFiltersPayload): Promise<unknown> {
    return this.api.post<unknown, ISearchFiltersPayload>(`${this.baseUri}/filters`, payload);
  }
}
