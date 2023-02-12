import { InsertResult, UpdateResult, DeleteResult } from "typeorm";
import { Post } from "./post.entity";
import { PostRepository } from "./post.repository";
import { CreatePostDto, UpdatePostDto } from "./dto";

export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async getAll(page, count): Promise<{ items: Post[]; totalCount: number }> {
    const limit = count ? +count : 1000;
    const offset = page ? (+page - 1) * +count : 0;
    const [data, size] = await this.postRepository.getAll(limit, offset);
    console.log(size);

    return { items: data, totalCount: size };
  }

  async getById(id: string): Promise<Post> {
    const data = await this.postRepository.getById(id);
    return data;
  }

  async create(values: CreatePostDto): Promise<InsertResult> {
    const response = await this.postRepository.create(values);
    return response;
  }

  async update(values: UpdatePostDto, id: string): Promise<UpdateResult> {
    const response = await this.postRepository.update(values, id);
    return response;
  }

  async remove(id: string): Promise<DeleteResult> {
    const response = await this.postRepository.remove(id);
    return response;
  }
}
