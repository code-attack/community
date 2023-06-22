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
    return await client.user.findFirst({
      where: { account_id },
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
    workExperienceInfo: User.WorkExperience[]
  ) => {
    const promises = workExperienceInfo.map(async (workExperience) => {
      const { id, ...rest } = workExperience;
      if (id) {
        await client.workExperience.update({
          where: { id: +id },
          data: { ...rest, userId: account_id },
        });
      } else {
        await client.workExperience.create({
          data: { ...rest, userId: account_id },
        });
      }
    });
    await Promise.all(promises);
  };

  updateIntroduce = async (id: string, introduceInfo: User.Introduce) => {
    await client.introduce.upsert({
      where: { userId: id },
      update: { ...introduceInfo },
      create: { ...introduceInfo, userId: id },
    });
  };
}
