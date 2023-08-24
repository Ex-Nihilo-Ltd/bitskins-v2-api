import { ICounter } from '../../../common/types';

export interface IUseGiftCodePayload {
  code: string;
}

export interface IGetUsedGiftCodesResponse {
  counter: ICounter;
  list: [];
}
