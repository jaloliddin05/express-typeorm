import { TypeOrmDataSource } from "../../config";

import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";

export const repository = TypeOrmDataSource.getRepository(User);

const userRepository = new UserRepository(repository);

export const userService = new UserService(userRepository,TypeOrmDataSource);
