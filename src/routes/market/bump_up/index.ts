import { ApiBase } from '../../../base/api';
import {
  IBumpSingleItemPayload,
  IBuyBumpsPackagePayload,
  IDisableBumpingPayload,
  IEnableBumpingPayload,
  IGetBumpedItemsPayload,
  IGetBumpedItemsResponse,
} from './types';

export class BumpUpRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/bump';
  }

  public async bump_single_item(payload: IBumpSingleItemPayload): Promise<boolean> {
    return this.api.post<boolean, IBumpSingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async get_bumped_items(payload: IGetBumpedItemsPayload): Promise<IGetBumpedItemsResponse> {
    return this.api.post<IGetBumpedItemsResponse, IGetBumpedItemsPayload>(`${this.baseUri}/list`, payload);
  }

  public async enable_bumping(payload: IEnableBumpingPayload): Promise<boolean> {
    return this.api.post<boolean, IEnableBumpingPayload>(`${this.baseUri}/enable`, payload);
  }

  public async disable_bumping(payload: IDisableBumpingPayload): Promise<boolean> {
    return this.api.post<boolean, IDisableBumpingPayload>(`${this.baseUri}/disable`, payload);
  }

  //TODO: check bump package prices
  public async buy_bumps_package(payload: IBuyBumpsPackagePayload): Promise<unknown> {
    return this.api.post<unknown, IBuyBumpsPackagePayload>(`${this.baseUri}/buy_package`, payload);
  }
}
