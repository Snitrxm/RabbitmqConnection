import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "../../../services/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return res.status(201).json(user);
  }
}
