import { ApiBase } from '../../../../base/api';
import { ITransferToP2PPayload } from './types';

export class WalletWithdrawP2PRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/withdraw/p2p';
  }

  public async transfer_to_p2p(payload: ITransferToP2PPayload): Promise<unknown> {
    return this.api.post<unknown, ITransferToP2PPayload>(`${this.baseUri}/transfer`, payload);
  }
}
