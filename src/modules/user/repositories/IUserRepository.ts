import { User } from "@prisma/client";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUserRepository {
  create({ email, name, password }: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
