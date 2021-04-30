import App from "./app";
import * as controllers from "./controllers";

const _ = new App([
    new controllers.HomeController()
]);

const server = _.getApp();
const socketServer = _.getSocketServer();

export {
    server,
    socketServer
}