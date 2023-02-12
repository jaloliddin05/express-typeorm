import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto, UpdateUserDto } from "./dto";

export class UserRepository {
  constructor(private readonly userRepository: Repository<User>) {}

  async getAll() {
    return this.userRepository.find();
  }

  async getById(id: string) {
    return this.userRepository
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .leftJoinAndSelect("user.comments","comment")
      .getOne();
  }

  async getByEmail(email:string){
    return this.userRepository
    .createQueryBuilder()
    .where("email = :email", {email})
    .getOne();
  }

  async create(values: CreateUserDto) {
    return this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(values as unknown as User)
      .execute();
  }

  async update(values: UpdateUserDto, id: string) {
    return this.userRepository
      .createQueryBuilder()
      .update()
      .set(values as unknown as User)
      .where("id = :id", { id })
      .execute();
  }

  async remove(id: string) {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
