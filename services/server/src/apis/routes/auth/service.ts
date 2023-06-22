import { UserRepository } from "@/repositorys/user";
import { Service } from "typedi";
import { Auth } from "@package/api-types";
import { ErrorResponse } from "@/utils/error-res";
import { commonError } from "@/constants";
import { comparePassword, generatePasswordHash } from "@/utils/hash";
import { jwtHelper } from "@/helpers/jwt";

@Service()
export class AuthService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  signUp = async (body: Auth.SingUp<"req">) => {
    const isAlreadyUser = await this.userRepository.findUser(body.account_id);

    if (isAlreadyUser) {
      throw new ErrorResponse(commonError.conflict);
    }

    const hashedPassword = await generatePasswordHash(body.password);

    const userInfo = {
      ...body,
      password: hashedPassword,
    };

    await this.userRepository.createUser(userInfo);

    return jwtHelper.generateToken(userInfo.account_id);
  };

  signIn = async (body: Auth.SignIn<"req">) => {
    const userRecord = await this.userRepository.findUser(body.account_id);

    if (!userRecord) {
      throw new ErrorResponse(commonError.notFound);
    }

    const isEqualPassword = await comparePassword(
      body.password,
      userRecord.password
    );

    if (!isEqualPassword) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    return jwtHelper.generateToken(userRecord.account_id);
  };
}
