import { AppId } from '../common/types';

export enum SocketAction {
  WS_AUTH = 'WS_AUTH',
  WS_AUTH_APIKEY = 'WS_AUTH_APIKEY',
  WS_DEAUTH = 'WS_DEAUTH',
  WS_SUB = 'WS_SUB',
  WS_UNSUB = 'WS_UNSUB',
  WS_UNSUB_ALL = 'WS_UNSUB_ALL',
}

export enum SocketChannel {
  listed = 'listed',
  delisted_or_sold = 'delisted_or_sold',
  price_changed = 'price_changed',
  extra_info = 'extra_info',
}

export interface ISocketItem {
  id: string;
  app_id: AppId;
  skin_id: number;
  price: number;
  name: string;
  class_id: string;
  suggested_price: number;
  asset_id: string;
}

type ISocketChannelDataInternal = {
  listed: ISocketItem;
  delisted_or_sold: ISocketItem;
  price_changed: ISocketItem & { old_price: number };
  extra_info: unknown;
};

export type ISocketChannelData<TChannel extends SocketChannel> = TChannel extends SocketChannel
  ? ISocketChannelDataInternal[TChannel]
  : never;
