import { Order, WalletTransactionsField, WalletTransactionsServiceId } from '../../common/types';

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
