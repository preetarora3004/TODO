import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '@workspace/app/backend/types/type.api.error.js';

export async function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {

        if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
            throw new ApiError(401, "Unauthotized access")
        }

        const token = req.headers.authorization.split(" ")[1];

        if (!token || !process.env.JWT_SECRET) {
            throw new ApiError(401, "Invalid secret")
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        
        if(!payload) {
            throw new ApiError(401, "Unauthorized access")
        }
        req.user = payload;

        next();
    }
    catch(err) {
        next(err);
    }

}