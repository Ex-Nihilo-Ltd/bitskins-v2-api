import { ICounter, Order, WalletTransactionsField, WalletTransactionsServiceId } from '../../common/types';

export interface IGetWalletTransactionsPayload {
  limit?: number;
  offset?: number;
  order?: IGetWalletTransactionsOrder;
  where?: IGetWalletTransactionsWhere;
}

export interface IGetWalletTransactionsOrder {
  field: WalletTransactionsField;
  order: Order;
}

export interface IGetWalletTransactionsWhere {
  amount_from?: number;
  amount_to?: number;
  date_from?: string;
  date_to?: string;
  date?: string;
  service_id?: WalletTransactionsServiceId;
}

export interface IWalletTransactionListItem {
  id: string;
  amount: number;
  service_id: number;
  type: number;
  created_at: string;
  action: string;
  channel: string;
  app_id: number;
  skin_id: number;
  name: string;
}

export interface IGetWalletTransactionsResponse {
  counter: ICounter;
  list: IWalletTransactionListItem[];
}

export interface IGetWalletPendingTransactionsResponse {
  counter: ICounter;
  list: IWalletTransactionListItem[];
}
