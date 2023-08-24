import { ApiBase } from '../../../base/api';
import { IGetReceiptPayload, IGetReceiptResponse } from './types';

export class ReceiptRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/receipt';
  }

  public async get_receipt(payload: IGetReceiptPayload): Promise<IGetReceiptResponse> {
    return this.api.post<IGetReceiptResponse, IGetReceiptPayload>(`${this.baseUri}/get`, payload);
  }
}
