import { UserRepository } from "@workspace/app/backend/modules/user/user.repository.js";
import { userCreation } from "@workspace/app/backend/modules/user/user.types.js";

export class UserService {
    private repo = new UserRepository();

    async create(data: userCreation) {
        return await this.repo.createUser(data);
    }

    async getUserByUsername(username: string) {
        return await this.repo.getUserByUsername(username);
    }
}