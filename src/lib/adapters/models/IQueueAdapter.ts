import { Connection } from "amqplib";

export interface IQueueAdapter {
  connect(): Promise<Connection>;
  notify(
    message: string,
    exchange: string,
    routingKey?: string
  ): Promise<boolean>;
}
