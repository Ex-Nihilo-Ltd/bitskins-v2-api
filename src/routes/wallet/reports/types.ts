import { ICounter, Order, ReportStatus, ReportType, WalletReportsOrderType } from '../../common/types';

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

export interface IWalletReportItem {
  id: number;
  user_id: number;
  type: number;
  date: string;
  status: ReportStatus;
  created_at: string;
  updated_at: string;
}

export interface IGetWalletReportsResponse {
  counter: ICounter;
  list: IWalletReportItem[];
}
