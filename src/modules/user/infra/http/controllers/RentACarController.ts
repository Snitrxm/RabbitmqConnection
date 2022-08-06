import { Request, Response } from "express";
import { container } from "tsyringe";

import { RentACarService } from "../../../services/RentACarService";

export class RentACarController {
  async handle(req: Request, res: Response) {
    const rentACarService = container.resolve(RentACarService);

    const rent = await rentACarService.execute();

    return res.status(200).json(rent);
  }
}
