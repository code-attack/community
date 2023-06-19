import { UserRepository } from "@/repositorys/user";
import { Service } from "typedi";
@Service()
export class AuthService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  signUp = async () => {};
  signIn = async () => {};
}
