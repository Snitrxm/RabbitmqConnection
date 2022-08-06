import amqp from "amqplib";
import { inject, injectable } from "tsyringe";

import { IQueueAdapter } from "../../../lib/adapters/models/IQueueAdapter";

@injectable()
export class RentACarService {
  constructor(
    @inject("QueueAdapter")
    private readonly queueAdapter: IQueueAdapter
  ) {
    //
  }

  async execute(): Promise<void> {
    const exchange = "rentACarExchange";
    await this.queueAdapter.notify("Message from adapter", exchange);
  }
}
