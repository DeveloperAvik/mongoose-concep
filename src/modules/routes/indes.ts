import { Router } from "express";
import userRouter from "../users/user.route";
import mangoRoute from "../mango/mango.route";

const routes = Router();


routes.use("/user", userRouter)
routes.use("/mango", mangoRoute)

export default routes;