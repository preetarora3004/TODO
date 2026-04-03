import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { UserService } from "@workspace/app/backend/modules/user/user.service.js";
import { ApiError } from "@workspace/app/backend/types/type.api.error.js";
import { isValidUserCreationInput, isValidUserSessionInput } from "@workspace/app/backend/modules/user/user.validator.js";

const service = new UserService();

export class UserController {
    async signUp(req: Request, res: Response, next: NextFunction) {
        try {
            const parsed = isValidUserCreationInput.safeParse(req.body);
            const SALT_ROUND = 10;

            if (!parsed.success) {
                throw new ApiError(400, "Invalid Schema")
            }

            const username = parsed.data.username.toLowerCase();
            const isUser = await service.getUserByUsername(username);

            if (isUser) {
                throw new ApiError(409, "User already exists");
            }

            const password = await bcrypt.hash(parsed.data.password, SALT_ROUND);
            const user = await service.create({
                ...parsed.data,
                username,
                password
            });
            const payload = {
                id: user._id,
                username: user.username
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET!, {
                expiresIn: "1h"
            });

            return res.status(201).json({
                success: true,
                data: {
                    token
                }
            })
        }
        catch (err) {
            next(err);
        }
    }

    async signIn(req: Request, res: Response, next: NextFunction) {
        try {
            const parsed = isValidUserSessionInput.safeParse(req.body);

            if (!parsed.success) {
                throw new ApiError(400, "Invalid Schema")
            }
            
            const username = parsed.data.username.toLocaleLowerCase();
            const user = await service.getUserByUsername(username);

            if (!user) {
                throw new ApiError(404, "User not exists")
            }

            const isValid = await bcrypt.compare(parsed.data.password, user.password);
            if (!isValid) {
                throw new ApiError(401, "Unauthorized access")
            }

            const payload = {
                id: user._id,
                username
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET!, {
                expiresIn: "1h"
            });
            return res.status(200).json({
                success: true,
                data: {
                    token
                }
            })
        }
        catch (err) {
            next(err);
        }
    }
}