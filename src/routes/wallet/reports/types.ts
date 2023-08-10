import { Order, ReportStatus, ReportType, WalletReportsOrderType } from '../../common/types';

export interface IGetWalletReportsPayload {
  limit?: number;
  offset?: number;
  order?: IGetWalletReportsOrder[];
  where?: IGetWalletReportsWhere;
}

export interface IGenerateWalletReportPayload {
  type: ReportType;
  date: string;
}

export interface IDownloadWalletReportPayload {
  id: number;
}

export interface IGetWalletReportsOrder {
  field: WalletReportsOrderType;
  order: Order;
}

export interface IGetWalletReportsWhere {
  type?: ReportType;
  status?: ReportStatus;
}
