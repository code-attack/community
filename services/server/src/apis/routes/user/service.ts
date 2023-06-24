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
}
