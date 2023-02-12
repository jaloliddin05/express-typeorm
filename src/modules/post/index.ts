import { TypeOrmDataSource } from "../../config";

import { PostService } from "./post.service";
import { PostRepository } from "./post.repository";
import { Post } from "./post.entity";

export const repository = TypeOrmDataSource.getRepository(Post);

const postRepository = new PostRepository(repository);

export const postService = new PostService(postRepository);
