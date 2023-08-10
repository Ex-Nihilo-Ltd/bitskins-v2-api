import { WithdrawBinanceReceiverType } from '../../../common/types';

export interface IWithdrawBinancePayload {
  twofa_code: string;
  amount: number;
  receiver: string;
  receiver_type: WithdrawBinanceReceiverType;
}
