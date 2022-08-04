import { User } from "@prisma/client";

import { prisma } from "../../../../prisma";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  async create({ email, name, password }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
