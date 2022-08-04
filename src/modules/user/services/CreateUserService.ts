import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
export class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {
    //
  }

  async execute({ email, name, password }: ICreateUserDTO): Promise<User> {
    const userExist = await this.userRepository.findByEmail(email);

    if (userExist) {
      throw new Error("User already exists.");
    }

    const user = await this.userRepository.create({ email, name, password });

    return user;
  }
}
