import { Injectable } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@Injectable()
@WebSocketGateway({ cors: true })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer()
  server: Server;

  handleDisconnect(client: any) {
    console.log(`${client.handshake.headers.authorization} успешно отключился`);
  }
  handleConnection(client: any, ...args: any[]) {
    console.log(`${client.handshake.headers.authorization} успешно подключился`);
  }
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
    console.log(`${client.handshake.headers.authorization} отправил сообщение`);
  }
}
