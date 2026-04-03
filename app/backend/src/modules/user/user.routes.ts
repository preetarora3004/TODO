import { Router } from "express";
import { UserController } from "@workspace/app/backend/modules/user/user.controller.js";
import { errorMiddleware } from "@workspace/app/backend/middleware/error.middleware.js";

const router = Router();
const controller = new UserController();

router.post("/signup", controller.signUp, errorMiddleware);
router.post("/signin", controller.signIn, errorMiddleware);

export default router;
