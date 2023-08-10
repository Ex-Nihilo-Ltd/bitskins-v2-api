import { ApiBase } from '../../../base/api';
import {
  IBumpSingleItemPayload,
  IBuyBumpsPackagePayload,
  IDisableBumpingPayload,
  IEnableBumpingPayload,
  IGetBumpedItemsPayload,
} from './types';

export class BumpUpRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/bump';
  }

  public async bump_single_item(payload: IBumpSingleItemPayload): Promise<unknown> {
    return this.api.post<unknown, IBumpSingleItemPayload>(`${this.baseUri}/single`, payload);
  }

  public async get_bumped_items(payload: IGetBumpedItemsPayload): Promise<unknown> {
    return this.api.post<unknown, IGetBumpedItemsPayload>(`${this.baseUri}/list`, payload);
  }

  public async enable_bumping(payload: IEnableBumpingPayload): Promise<unknown> {
    return this.api.post<unknown, IEnableBumpingPayload>(`${this.baseUri}/enable`, payload);
  }

  public async disable_bumping(payload: IDisableBumpingPayload): Promise<unknown> {
    return this.api.post<unknown, IDisableBumpingPayload>(`${this.baseUri}/disable`, payload);
  }

  public async buy_bumps_package(payload: IBuyBumpsPackagePayload): Promise<unknown> {
    return this.api.post<unknown, IBuyBumpsPackagePayload>(`${this.baseUri}/buy_package`, payload);
  }
}
