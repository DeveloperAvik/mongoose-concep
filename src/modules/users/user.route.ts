import { Router } from "express";
import { registerUser } from "./user.controller";

const userRouter = Router();



userRouter.post("/user", registerUser)



export default userRouter;