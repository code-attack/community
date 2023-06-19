export interface SignUpReq {
  account_id: string;
  password: string;
  name: string;
  role: "mento" | "menti";
}

export interface SignInReq {
  account_id: string;
  password: string;
}
