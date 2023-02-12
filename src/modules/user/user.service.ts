import { InsertResult, UpdateResult, DeleteResult, DataSource,EntityManager } from "typeorm";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import { CreateUserDto, UpdateUserDto } from "./dto";

export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly connection:DataSource
    ) {}

  async getAll(): Promise<User[]> {
    const data = await this.userRepository.getAll();
    return data;
  }

  async getById(id: string): Promise<User> {
    const data = await this.userRepository.getById(id);
    if(!data){
      throw new Error("User not found")
    }
    return data;
  }

  async getByEmail(email: string): Promise<User> {
    const data = await this.userRepository.getByEmail(email)
    if(!data){
      throw new Error("User not found")
    }
    return data
  }

  async create(values: CreateUserDto): Promise<User> {
    const user = new User()
    user.email = values.email
    user.firstname = values.firstname
    user.lastname = values.lastname
    user.username = values.username
    user.role = values.role
    await user.hashPassword(values.password)

    await this.connection.transaction(async(manager:EntityManager)=>{
      await manager.save(user)
    })

    return user
  }

  async update(values: UpdateUserDto, id: string): Promise<UpdateResult> {
    const response = await this.userRepository.update(values, id);
    return response;
  }

  async remove(id: string): Promise<DeleteResult> {
    const response = await this.userRepository.remove(id);
    return response;
  }
}
