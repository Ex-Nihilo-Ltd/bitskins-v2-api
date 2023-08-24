import { IApiBaseConfig } from '../../base/api/types';
import { WebSocket, MessageEvent } from 'ws';
import { SocketAction, SocketChannel, ISocketChannelData } from './types';

export class SocketRoutes {
  private _socket: WebSocket | null = null;
  private _socket_ready: boolean = false;
  private _socket_authorized: boolean = false;

  private listener_map: { [TCHannel in SocketChannel]?: ((data: ISocketChannelData<TCHannel>) => void)[] } = {};

  private _on_connect: (() => void) | null = null;
  private _on_disconnect: (() => void) | null = null;
  private _on_auth: (() => void) | null = null;

  constructor(private readonly config: IApiBaseConfig) {}

  public is_ready(): boolean {
    return this._socket_ready;
  }

  public is_authorized(): boolean {
    return this._socket_authorized;
  }

  public connect(): void {
    this._socket = new WebSocket('wss://ws.bitskins.com');

    this._socket.addEventListener('open', () => {
      this._socket_ready = true;

      this._on_connect?.();
    });

    this._socket.addEventListener('close', () => {
      this._socket_ready = false;
      this._on_disconnect?.();
    });

    this._socket.addEventListener('message', <TCHannel extends SocketChannel>(event: MessageEvent) => {
      const [action, data] = JSON.parse(event.data as string) as [TCHannel, ISocketChannelData<TCHannel>];

      // handling case where we get the message about authorization passed
      if (
        (action as unknown as SocketAction) === SocketAction.WS_AUTH_APIKEY ||
        (action as unknown as SocketAction) === SocketAction.WS_AUTH
      ) {
        this._socket_authorized = true;
        this._on_auth?.();
      }

      this.listener_map[action]?.forEach((listener) => {
        listener(data);
      });
    });
  }

  public authorize(): void {
    if (this.config.authToken) {
      this.send_to_socket(SocketAction.WS_AUTH, this.config.authToken);
    } else if (this.config.apiKey) {
      this.send_to_socket(SocketAction.WS_AUTH_APIKEY, this.config.apiKey);
    }
  }

  public deauthorize(): void {
    this._socket_authorized = false;
    this.send_to_socket(SocketAction.WS_DEAUTH);
  }

  public on_connect(callback: () => void): void {
    this._on_connect = callback;
  }

  public on_disconnect(callback: () => void): void {
    this._on_disconnect = callback;
  }

  public on_auth(callback: () => void): void {
    this._on_auth = callback;
  }

  public add_listener<TCHannel extends SocketChannel>(
    channel: TCHannel,
    listener: (data: ISocketChannelData<TCHannel>) => void,
  ): () => void {
    if (!this.listener_map[channel]) {
      this.listener_map[channel] = [];
    }

    this.listener_map[channel]?.push(listener);

    return () => {
      this.listener_map[channel]?.filter((l) => l !== listener);
    };
  }

  public subscribe_to_channel(channel: SocketChannel): void {
    this.send_to_socket(SocketAction.WS_SUB, channel);
  }

  public subscribe_to_all(): void {
    [
      SocketChannel.listed,
      SocketChannel.delisted_or_sold,
      SocketChannel.extra_info,
      SocketChannel.price_changed,
    ].forEach((channel) => {
      this.send_to_socket(SocketAction.WS_SUB, channel);
    });
  }

  public unsubscribe_from_channel(channel: SocketChannel): void {
    this.send_to_socket(SocketAction.WS_UNSUB, channel);
    delete this.listener_map[channel];
  }

  public unsubscribe_all() {
    this.send_to_socket(SocketAction.WS_UNSUB_ALL);
    this.listener_map = {};
  }

  private send_to_socket(action: SocketAction, data: string = ''): void {
    if (!this._socket || !this._socket_ready) {
      throw new Error('Socket not initialized');
    }

    this._socket.send(JSON.stringify([action, data]));
  }
}
