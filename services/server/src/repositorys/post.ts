import { client } from "@prisma";
import { Service } from "typedi";
import { Post } from "@package/api-types";

@Service()
export class PostRepository {
  create = async (postInfo: Post.CreateReq) => {
    await client.post.create({ data: { ...postInfo } });
  };

  removeById = async (id: number) => {
    await client.post.delete({ where: { id } });
  };

  updateById = async (id: number, postInfo: Post.UpdateReq) => {
    await client.post.update({ where: { id }, data: { ...postInfo } });
  };

  getAll = async () => {
    return await client.post.findMany({});
  };

  getById = async (id: number) => {
    return await client.post.findMany({ where: { id } });
  };
}
