export interface SignUpReq {
  account_id: string;
  password: string;
  name: string;
}

export interface SignInReq {
  account_id: string;
  password: string;
}
