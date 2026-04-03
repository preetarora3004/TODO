import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import userRoutes from '@workspace/app/backend/modules/user/user.routes.js'
import { errorMiddleware } from './middleware/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json())
app.use("/user", userRoutes);

app.use(errorMiddleware);


export default app;
