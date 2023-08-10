import { ApiBase } from '../../../base/api';
import {
  ICreateBuyOrderPayload,
  ICreateBuyOrderBySkinNamePayload,
  ICheckBuyOrderPositionPayload,
  IGetOwnBuyOrdersPayload,
  IGetSkinBuyOrdersPayload,
  ICancelBuyOrderPayload,
  ICancelMultipleBuyOrdersPayload,
  ICancelAllBuyOrdersPayload,
  IGetBuyOrderSummaryPayload,
} from './types';

export class BuyOrderRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/buy_order';
  }

  public async create_buy_order(payload: ICreateBuyOrderPayload): Promise<unknown> {
    return this.api.post<unknown, ICreateBuyOrderPayload>(`${this.baseUri}/create`, payload);
  }

  public async create_buy_order_by_skin_name(payload: ICreateBuyOrderBySkinNamePayload): Promise<unknown> {
    return this.api.post<unknown, ICreateBuyOrderBySkinNamePayload>(`${this.baseUri}/create_by_name`, payload);
  }

  public async check_buy_order_position(payload: ICheckBuyOrderPositionPayload): Promise<unknown> {
    return this.api.post<unknown, ICheckBuyOrderPositionPayload>(`${this.baseUri}/check_position`, payload);
  }

  public async get_own_buy_orders(payload: IGetOwnBuyOrdersPayload): Promise<unknown> {
    return this.api.post<unknown, IGetOwnBuyOrdersPayload>(`${this.baseUri}/list_mine`, payload);
  }

  public async get_skin_buy_orders(payload: IGetSkinBuyOrdersPayload): Promise<unknown> {
    return this.api.post<unknown, IGetSkinBuyOrdersPayload>(`${this.baseUri}/list`, payload);
  }

  public async cancel_buy_order(payload: ICancelBuyOrderPayload): Promise<unknown> {
    return this.api.post<unknown, ICancelBuyOrderPayload>(`${this.baseUri}/cancel`, payload);
  }

  public async cancel_multiple_buy_orders(payload: ICancelMultipleBuyOrdersPayload): Promise<unknown> {
    return this.api.post<unknown, ICancelMultipleBuyOrdersPayload>(`${this.baseUri}/cancel_many`, payload);
  }

  public async cancel_all_buy_orders(payload: ICancelAllBuyOrdersPayload): Promise<unknown> {
    return this.api.post<unknown, ICancelAllBuyOrdersPayload>(`${this.baseUri}/cancel_all`, payload);
  }

  public async get_buy_order_summary(payload: IGetBuyOrderSummaryPayload): Promise<unknown> {
    return this.api.post<unknown, IGetBuyOrderSummaryPayload>(`${this.baseUri}/summary`, payload);
  }
}
