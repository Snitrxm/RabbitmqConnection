import amqp from "amqplib";

export class RentACarService {
  async execute(): Promise<void> {
    const connection = await amqp.connect({
      hostname: "rabbitmq",
      port: 5672,
      username: "rabbitmq",
      password: "rabbitmq",
    });

    const channel = await connection.createChannel();

    const QUEUE = "rent-a-car";

    await channel.assertQueue(QUEUE, { durable: true });

    channel.sendToQueue(QUEUE, Buffer.from("Hello World!"));

    console.log(`MEssage sent to ${QUEUE}`);
  }
}
