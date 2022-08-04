import "reflect-metadata";
import "./shared/container";
import express from "express";

import { v1Routes } from "./api/http/v1Routes";

const app = express();

app.use(express.json());
app.use(v1Routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
