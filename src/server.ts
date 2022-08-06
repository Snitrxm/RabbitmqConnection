import "reflect-metadata";
import "./shared/container";
import express from "express";
import { container } from "tsyringe";

import { v1Routes } from "./api/http/v1Routes";
import { RabbitmqAdapter } from "./lib/adapters/implementations/RabbitmqAdapter";
import { IQueueAdapter } from "./lib/adapters/models/IQueueAdapter";

const app = express();

app.use(express.json());
app.use(v1Routes);

const PORT = 3000;

(async () => {
  const rabbitMQ = new RabbitmqAdapter();
  await rabbitMQ.connect();

  container.registerInstance<IQueueAdapter>("QueueAdapter", rabbitMQ);
  console.log(`Created RabbitMQ adapter`);
})();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
