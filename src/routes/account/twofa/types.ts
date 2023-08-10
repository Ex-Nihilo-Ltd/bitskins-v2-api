export interface IVerifyTwoFACodePayload {
  email_code: string;
  twofa_code: string;
}

export interface IDisableTwoFACodePayload {
  twofa_code: string;
}

export interface IVerifyDisablingTwoFACodePayload {
  email_code: string;
}

export interface IUnlockTwoFAPayload {
  twofa_code: string;
}
