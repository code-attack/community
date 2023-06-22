export type SingUp<T extends "req" | "res"> = T extends "req"
  ? {
      account_id: string;
      password: string;
      name: string;
      role: "mento" | "menti";
    }
  : { access_token: string; refresh_token: string };

export type SignIn<T extends "req" | "res"> = T extends "req"
  ? { account_id: string; password: string }
  : { access_token: string; refresh_token: string };
