import { ApiBase } from '../../../base/api';
import { IDownloadWalletReportPayload, IGenerateWalletReportPayload, IGetWalletReportsPayload } from './types';

export class WalletReportRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/report';
  }

  public async get_wallet_reports(payload: IGetWalletReportsPayload): Promise<unknown> {
    return this.api.post<unknown, IGetWalletReportsPayload>(`${this.baseUri}/list`, payload);
  }

  public async generate_wallet_report(payload: IGenerateWalletReportPayload): Promise<unknown> {
    return this.api.post<unknown, IGenerateWalletReportPayload>(`${this.baseUri}/generate`, payload);
  }

  public async download_wallet_report(payload: IDownloadWalletReportPayload): Promise<unknown> {
    return this.api.post<unknown, IDownloadWalletReportPayload>(`${this.baseUri}/download`, payload);
  }
}
