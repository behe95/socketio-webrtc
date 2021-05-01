import React from "react";
import io from "socket.io-client";

const ENDPOINT  = "http://localhost:5000/";

interface socketType{
    connectedSocketId: string,
    socket: SocketIOClient.Socket
}

const socket:SocketIOClient.Socket = io.connect(ENDPOINT); 

const SocketContext: React.Context<socketType> = React.createContext({} as socketType);

export const useSocket: () => socketType = () => React.useContext(SocketContext);

export const SocketProvider = ({children}:{children:React.ReactNode}) => {
    
    const [connectedSocketId, setConnectedSocketId] = React.useState("");

    React.useEffect(() => {
        socket.on('clientSocketConnected', (socketId:string) => {
            setConnectedSocketId(socketId);       
        })
    },[]);

    

    const value:socketType = {
        connectedSocketId,
        socket
    };

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}