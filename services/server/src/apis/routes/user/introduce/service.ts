import { UserRepository } from "@/repositorys/user";
import { User } from "@package/api-types";
import { Service } from "typedi";

@Service()
export class IntroduceService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  update = async (account_id: string, body: User.UpdateIntroduceReq) => {
    await this.userRepository.updateIntroduce(account_id, body);
  };
}
