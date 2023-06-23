import { Create, PostRepository } from "@/repositorys/post";
import { Service } from "typedi";
import { Post } from "@package/api-types";

@Service()
export class PostService {
  private postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  create = async (postInfo: Create, userId: string) => {
    await this.postRepository.create(postInfo, userId);
  };

  updateById = async (id: string, postInfo: Post.UpdateReq, userId: string) => {
    // Todo:본인 게시글인지 검증을 어떻게 하지?
    await this.postRepository.updateById(+id, postInfo, userId);
  };

  removeById = async (id: string, userId: string) => {
    await this.postRepository.removeById(+id);
  };

  getAll = async (from: number) => {
    return await this.postRepository.getAll(from);
  };

  getById = async (id: string) => {
    return await this.postRepository.getById(+id);
  };
}
