import { Router } from "express";

import { userRoutes } from "../../modules/user/infra/http/routes";

export const v1Routes = Router();

v1Routes.use("/user", userRoutes);
