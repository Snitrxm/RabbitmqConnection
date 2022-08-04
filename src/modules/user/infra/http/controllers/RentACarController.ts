import { Request, Response } from "express";

import { RentACarService } from "../../../services/RentACarService";

export class RentACarController {
  async handle(req: Request, res: Response) {
    const rentACarService = new RentACarService();

    const rent = await rentACarService.execute();

    return res.status(200).json(rent);
  }
}
