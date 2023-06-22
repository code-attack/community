import { UserRepository } from "@/repositorys/user";
import { User } from "@package/api-types";
import { Service } from "typedi";
import { validation } from "..";
import Joi from "joi";

@Service()
export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  getAll = async () => {
    return await this.userRepository.findUserProfile();
  };

  getById = async (id: string) => {
    return await this.userRepository.findUserProfileById(+id);
  };

  getByAccountId = async (account_id: string) => {
    return await this.userRepository.findUserByAccountId(account_id);
  };

  writeProfile = async (
    type: "introduce" | "work-experience",
    account_id: string,
    body: User.Introduce | User.WorkExperience
  ) => {
    switch (type) {
      case "introduce":
        validation(
          Joi.object<any, true, User.Introduce>({
            content: Joi.string().required(),
          }),
          body
        );
        this.userRepository.updateIntroduce(account_id, body as User.Introduce);
      case "work-experience":
        validation(
          Joi.object<any, true, User.WorkExperience>({
            name: Joi.string().required(),
            field: Joi.string().required(),
            startDate: Joi.string().required(),
            endDate: Joi.string(),
            id: Joi.string(),
          }),
          body
        );
        this.userRepository.updateWorkExperience(
          account_id,
          body as User.WorkExperience
        );
    }
  };
}
