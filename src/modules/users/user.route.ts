import { Router } from "express";
import { getUsers, registerUser } from "./user.controller";

const userRouter = Router();

userRouter.post("/", registerUser);
userRouter.get("/", getUsers);



export default userRouter;