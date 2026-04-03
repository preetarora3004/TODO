import { User } from "@workspace/app/db/db.js";

export class UserRepository {
    async createUser(data: {
        name: string,
        username: string,
        password: string
    }) {
        return await User.create(data)
    }

    async getUserByUsername(username: string) {
        return await User.findOne({
            username
        })
    }
}