import { Router } from "express";
import {authMiddleware} from "@workspace/app/backend/middleware/auth.middleware.js"
import { TaskController } from "@workspace/app/backend/modules/task/task.controller.js";

const router = Router();
const controller = new TaskController();

router.post("/create-task", authMiddleware, controller.createTask);
router.get("/get-task", authMiddleware, controller.getTaskByUserId);
router.patch("/edit-task/:taskId", authMiddleware, controller.editTaskByTaskId);
router.patch("/mark-complete/:taskId", authMiddleware, controller.markTaskCompleted);
router.delete("/delete-task/:taskId", authMiddleware, controller.deleteTaskByTaskId);
router.get("/get-task/category", authMiddleware, controller.groupByCategory);

export default router;