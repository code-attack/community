import { client } from "@prisma";
import { Auth } from "@package/api-types";
import { Service } from "typedi";

@Service()
export class UserRepository {
  createUser = async (UserInfo: Auth.SignUpReq) => {
    await client.user.create({
      data: { ...UserInfo },
    });
  };
  findUser = async (account_id: string) => {
    return await client.user.findFirst({
      where: { account_id },
    });
  };
}
