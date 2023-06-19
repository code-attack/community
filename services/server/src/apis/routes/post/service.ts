import { PostRepository } from "@/repositorys/post";
import { Service } from "typedi";
import { Post } from "@package/api-types";

@Service()
export class PostService {
  private postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  create = async (postInfo: Post.CreateReq) => {
    await this.postRepository.create(postInfo);
  };

  updateById = async (id: string, postInfo: Post.UpdateReq) => {
    await this.postRepository.updateById(+id, postInfo);
  };

  removeById = async (id: string) => {
    await this.postRepository.removeById(+id);
  };

  getAll = async () => {
    return await this.postRepository.getAll();
  };

  getById = async (id: string) => {
    return await this.postRepository.getById(+id);
  };
}
