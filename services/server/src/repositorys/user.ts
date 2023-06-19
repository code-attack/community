import { client } from "@prisma";
import { Auth } from "@package/api-types";

export class UserRepository {
  createUser = async (UserInfo: Auth.SignUpReq) => {
    await client.user.create({
      data: { ...UserInfo },
    });
  };
}
