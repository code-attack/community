import { UserRepository } from "@/repositorys/user";
import { Service } from "typedi";
import { Auth } from "@package/api-types";

@Service()
export class AuthService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  signUp = async (body: Auth.SignUpReq) => {
    // 기존 유저 확인
    // 토큰 리턴
  };
  signIn = async () => {};
}
