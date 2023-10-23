import { ApiBase } from '../../../base/api';
import {
  IDownloadWalletReportPayload,
  IGenerateWalletReportPayload,
  IGetWalletReportsPayload,
  IGetWalletReportsResponse,
} from './types';

export class WalletReportRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/wallet/report';
  }

  public async get_wallet_reports(payload: IGetWalletReportsPayload): Promise<IGetWalletReportsResponse> {
    return this.api.post<IGetWalletReportsResponse, IGetWalletReportsPayload>(`${this.baseUri}/list`, payload);
  }

  public async generate_wallet_report(payload: IGenerateWalletReportPayload): Promise<boolean> {
    return this.api.post<boolean, IGenerateWalletReportPayload>(`${this.baseUri}/generate`, payload);
  }

  public async download_wallet_report(payload: IDownloadWalletReportPayload): Promise<unknown> {
    return this.api.post<unknown, IDownloadWalletReportPayload>(`${this.baseUri}/download`, payload);
  }
}
