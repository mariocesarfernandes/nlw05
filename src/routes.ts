import { UsersController } from './controllers/UsersControler';
import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController"
import { MessagesController } from './controllers/MessagesController';

const routes = Router();

/**
 * Tipos de paramento
 * Routes Params => paramentors de rota
 * Query Paramns => filtros e busca
 * Body Paramns =>passa objetos {
 * 
 * }
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessagesController();


routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);


routes.post("/users", usersController.create);

routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showByUser);



export { routes };