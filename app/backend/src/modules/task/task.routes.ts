import { Router } from "express";
import {authMiddleware} from "@workspace/app/backend/middleware/auth.middleware.js"
import { TaskController } from "@workspace/app/backend/modules/task/task.controller.js";

const router = Router();
const controller = new TaskController();

router.post("/create-task", authMiddleware, controller.createTask);
router.get("/get-task", authMiddleware, controller.getTaskByUserId);
router.delete("/delete-task/:taskId", authMiddleware, controller.deleteTaskByTaskId);
router.patch("/mark-complete/:taskId", authMiddleware, controller.markTaskCompleted);

export default router;