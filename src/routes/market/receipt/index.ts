import { ApiBase } from '../../../base/api';
import { IGetReceiptPayload } from './types';

export class ReceiptRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/market/receipt';
  }

  public async get_receipt(payload: IGetReceiptPayload): Promise<unknown> {
    return this.api.post<unknown, IGetReceiptPayload>(`${this.baseUri}/get`, payload);
  }
}
