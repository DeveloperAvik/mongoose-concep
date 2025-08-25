import { Router } from "express";
import {mangoController } from "./mango.controller";

const mangoRoute = Router();

mangoRoute.post("/", mangoController.createMango);
mangoRoute.get("/:id", mangoController.getMangoById);
mangoRoute.patch("/:id", mangoController.updateMango);
mangoRoute.delete("/:id", mangoController.deleteMango);
mangoRoute.get("/", mangoController.getMango);



export default mangoRoute;