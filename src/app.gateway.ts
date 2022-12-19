import { Injectable } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { HelpJwtService } from './help/token.service';

@Injectable()
@WebSocketGateway({ cors: true })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private activeUsersList: string[] = [];

  constructor(private jwtHelpService: HelpJwtService) {}

  handleDisconnect(client: any) {
    const decodeToken = this.jwtHelpService.decodeJwtFromString(client.handshake.headers.authorization);    
    this.activeUsersList = this.activeUsersList.filter(el => el !== decodeToken?.email);
    this.server.emit('updateUsers', { users: this.activeUsersList });
  }
  handleConnection(client: any, ...args: any[]) {
    const decodeToken = this.jwtHelpService.decodeJwtFromString(client.handshake.headers.authorization);
    this.activeUsersList = [...this.activeUsersList, decodeToken?.email];
    this.server.emit('updateUsers', { users: this.activeUsersList });
  }
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
    console.log(`${client.handshake.headers.authorization} отправил сообщение`);
  }
}
