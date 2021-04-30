import * as Http from "http";
import * as SocketIO from "socket.io";

export default class SocketServer {
    private socketServer: SocketIO.Server;

    constructor(httpServer: Http.Server) {
        this.socketServer = new SocketIO.Server(httpServer, {
            cors: {
                origin: true
            }
        });
        

        this.listen();

        return this;
    }


    private listen(): void {
        console.log("SOCKET SERVER IS LISTENING ============================ ");
        
        this.socketServer.on('connection', (socket: SocketIO.Socket) => {
            let _this = this;
            console.log("Connected Socket ID ====================== ", socket.id);

            socket.on('disconnect', this.onDisconnect);

        });
    };


    private onDisconnect():void{
        console.log("User disconnected");
        
    }


}