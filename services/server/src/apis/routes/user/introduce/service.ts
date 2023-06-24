import { UserRepository } from "@/repositorys/user";
import { Service } from "typedi";

@Service()
export class IntroduceService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
}
