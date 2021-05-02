import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";


http.listen(3333, () => console.log("Server us running on port 3333"));