import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { CreatePostDto, UpdatePostDto } from "./dto";

export class PostRepository {
  constructor(private readonly postRepository: Repository<Post>) {}

  async getAll(limit, offset) {
    return this.postRepository
      .createQueryBuilder()
      .offset(offset)
      .limit(limit)
      .getManyAndCount();
  }

  async getById(id: string) {
    return this.postRepository
      .createQueryBuilder("category")
      .where("category.id = :id", { id })
      .leftJoinAndSelect("category.subCategories", "sub_category")
      .getOne();
  }

  async create(values: CreatePostDto) {
    return this.postRepository
      .createQueryBuilder()
      .insert()
      .into(Post)
      .values(values as unknown as Post)
      .execute();
  }

  async update(values: UpdatePostDto, id: string) {
    return this.postRepository
      .createQueryBuilder()
      .update()
      .set(values as unknown as Post)
      .where("id = :id", { id })
      .execute();
  }

  async remove(id: string) {
    return this.postRepository
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
