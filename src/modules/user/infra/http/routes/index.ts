import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { RentACarController } from "../controllers/RentACarController";

const createUserController = new CreateUserController();
const rentACarController = new RentACarController();

export const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/rent", rentACarController.handle);
