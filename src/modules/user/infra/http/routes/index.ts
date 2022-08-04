import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";

const createUserController = new CreateUserController();

export const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
