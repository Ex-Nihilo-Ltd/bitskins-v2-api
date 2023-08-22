import { AppId } from '../../common/types';

export interface IGetReceiptPayload {
  app_id: AppId;
  id: string;
}

export interface IGetReceiptResponse {
  receipt_id: string,
  name: string,
  class_id: string,
  suggested_price: number,
  id: string,
  skin_id: number,
  price: number,
  float_value: number,
  stickers?: object[]
}
