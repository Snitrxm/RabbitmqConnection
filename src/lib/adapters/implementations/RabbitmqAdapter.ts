/* eslint-disable no-plusplus */
import amqplib, { Channel, Connection } from "amqplib";

import { IQueueAdapter } from "../models/IQueueAdapter";

interface IConnectionObject {
  hostname: string;
  port: number;
  username: string;
  password: string;
}

export class RabbitmqAdapter implements IQueueAdapter {
  private connection: Connection | undefined;
  private channel: Channel | any;
  private connectionObject: IConnectionObject;

  constructor() {
    this.connectionObject = {
      hostname: "rabbitmq",
      port: 5672,
      username: "rabbitmq",
      password: "rabbitmq",
    };
  }

  public async connect(): Promise<Connection> {
    if (!this.connection) {
      this.connection = await amqplib.connect(this.connectionObject);

      this.channel = await this.connection.createChannel();
    }

    return this.connection;
  }

  public async notify(
    message: string,
    exchange: string,
    routingKey?: string
  ): Promise<boolean> {
    let published = false;
    try {
      await this.channel.assertExchange(exchange, "fanout", { durable: true });
      await this.channel.publish(exchange, routingKey, Buffer.from(message));
      console.log(`Send message to exchange: ${exchange}`);
      published = true;
    } catch (err) {
      console.log(err);
    }

    return published;
  }
}
