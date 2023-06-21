import { UserRepository } from "@/repositorys/user";
import { Service } from "typedi";

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

  writeProfile = async (
    type: "introduce" | "work-experience",
    account_id: string
  ) => {
    switch (type) {
      case "introduce":

      case "work-experience":
    }
  };
}
