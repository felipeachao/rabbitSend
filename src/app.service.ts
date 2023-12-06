import { Injectable, Inject } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
@Injectable()
export class AppService {
  private client: ClientProxy;
  constructor() {}

  async sendCats() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'celio',
      },
    });

    this.client.emit('celio', {
      id: '1',
      name: 'celioServicse',
    });
  }
}
