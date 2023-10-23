import { ApiBase } from '../../../../base/api';
import { IAddCardPayload, IDepositCardPayload } from './types';

export class WalletDepositCardRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/deposit/unlimint';
  }

  public async add_card(payload: IAddCardPayload): Promise<unknown> {
    return this.api.post<unknown, IAddCardPayload>(`${this.baseUri}/add_card`, payload);
  }

  public async list_cards(): Promise<unknown> {
    return this.api.post<unknown>(`${this.baseUri}/list_cards`, {});
  }

  public async deposit_card(payload: IDepositCardPayload): Promise<unknown> {
    return this.api.post<unknown, IDepositCardPayload>(`${this.baseUri}/card_deposit`, payload);
  }
}
