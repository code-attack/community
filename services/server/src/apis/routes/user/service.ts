import { UserRepository } from "@/repositorys/user";
import { Service } from "typedi";

@Service()
export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  getAll = async () => {};

  getById = async (id: string) => {};
}
