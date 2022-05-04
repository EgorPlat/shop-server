import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleDisconnect(client: any): void;
    handleConnection(client: any, ...args: any[]): void;
    handleMessage(client: any, payload: any): void;
}
