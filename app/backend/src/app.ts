import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { errorMiddleware } from './middleware/error.middleware.js';
import userRoutes from '@workspace/app/backend/modules/user/user.routes.js'
import taskRoutes from '@workspace/app/backend/modules/task/task.routes.js';

const app = express();

app.use(cors());
app.use(express.json())
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/task", taskRoutes);

app.use(errorMiddleware);

export default app;
