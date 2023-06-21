import { client } from "@prisma";
import { Auth, User } from "@package/api-types";
import { Service } from "typedi";

@Service()
export class UserRepository {
  createUser = async (userInfo: Auth.SignUpReq) => {
    await client.user.create({
      data: { ...userInfo },
    });
  };

  findUser = async (account_id: string) => {
    return await client.user.findFirst({
      where: { account_id },
    });
  };

  findUserProfile = async () => {
    return await client.user.findMany();
  };

  findUserProfileById = async (id: number) => {
    return await client.user.findFirst({
      where: { id },
    });
  };

  updateWorkExperience = async (
    id: string,
    workExperienceInfo: User.WriteReq
  ) => {
    await client.workExperience.updateMany({
      where: { userId: id },
      data: { ...workExperienceInfo.WorkExperience },
    });
  };

  updateIntroduce = async (id: string, introduceInfo: User.WriteReq) => {
    await client.introduce.updateMany({
      where: { userId: id },
      data: { ...introduceInfo.Introduce },
    });
  };
}
