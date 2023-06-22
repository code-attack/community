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
    return await client.user.findMany({
      where: {
        role: "mento",
      },
      select: {
        id: true,
        name: true,
        tag: true,
        profile_img: true,
        technology: true,
      },
    });
  };

  findUserByAccountId = async (account_id: string) => {
    return await client.user.findUnique({
      where: { account_id },
    });
  };

  findUserProfileById = async (id: number) => {
    return await client.user.findFirst({
      where: { id },
      select: {
        name: true,
        role: true,
        tag: true,
        profile_img: true,
        introduce: {
          select: {
            content: true,
          },
        },
        technology: true,
        workExperience: true,
      },
    });
  };

  updateWorkExperience = async (
    account_id: string,
    workExperienceInfo: User.WorkExperience
  ) => {
    const id = +workExperienceInfo.id;
    console.log(workExperienceInfo);

    await client.user.update({
      where: { account_id },
      data: {
        workExperience: {
          upsert: {
            where: { userId: account_id },
            create: { ...workExperienceInfo, id },
            update: {
              ...workExperienceInfo,
              id,
            },
          },
        },
      },
    });
  };

  updateIntroduce = async (id: string, introduceInfo: User.Introduce) => {
    await client.introduce.upsert({
      where: { userId: id },
      update: { ...introduceInfo },
      create: { ...introduceInfo, userId: id },
    });
  };
}
