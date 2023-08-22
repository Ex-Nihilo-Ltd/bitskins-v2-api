import { ApiBase } from '../../../base/api';
import { AppId } from '../../common/types';
import {
  IGetFiltersResponse,
  ISearchCSGOPayload,
  ISearchCSGOResponse,
  ISearchDota2Payload,
  ISearchDota2Response,
  ISearchFiltersPayload,
  ISearchItemDetailsPayload,
  ISearchItemDetailsResponse,
  ISearchRustPayload,
  ISearchRustResponse,
  ISearchSkinPayload,
  ISearchSkinResponse,
  ISearchStorePayload,
  ISearchStoreResponse,
  ISearchTF2Payload,
  ISearchTf2Response,
} from './types';

export class MarketItemsRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/search';
  }

  public async search_tf2(payload: ISearchTF2Payload): Promise<ISearchTf2Response> {
    return this.api.post<ISearchTf2Response, ISearchTF2Payload>(`${this.baseUri}/${AppId.TF2}`, payload);
  }

  public async search_dota2(payload: ISearchDota2Payload): Promise<ISearchDota2Response> {
    return this.api.post<ISearchDota2Response, ISearchDota2Payload>(`${this.baseUri}/${AppId.DOTA2}`, payload);
  }

  public async search_csgo(payload: ISearchCSGOPayload): Promise<ISearchCSGOResponse> {
    return this.api.post<ISearchCSGOResponse, ISearchCSGOPayload>(`${this.baseUri}/${AppId.CSGO}`, payload);
  }

  public async search_rust(payload: ISearchRustPayload): Promise<ISearchRustResponse> {
    return this.api.post<ISearchRustResponse, ISearchRustPayload>(`${this.baseUri}/${AppId.RUST}`, payload);
  }

  //TODO: response should be handled better
  public async search_store(payload: ISearchStorePayload): Promise<ISearchStoreResponse> {
    return this.api.post<ISearchStoreResponse, ISearchStorePayload>(`${this.baseUri}/store`, payload);
  }

  public async get_item_details(payload: ISearchItemDetailsPayload): Promise<ISearchItemDetailsResponse> {
    return this.api.post<ISearchItemDetailsResponse, ISearchItemDetailsPayload>(`${this.baseUri}/get`, payload);
  }

  public async search_skin(payload: ISearchSkinPayload): Promise<ISearchSkinResponse> {
    return this.api.post<ISearchSkinResponse, ISearchSkinPayload>(`${this.baseUri}/skin_name`, payload);
  }

  public async get_filters(payload: ISearchFiltersPayload): Promise<IGetFiltersResponse> {
    return this.api.post<IGetFiltersResponse, ISearchFiltersPayload>(`${this.baseUri}/filters`, payload);
  }
}
