import { client } from "@prisma";
import { Service } from "typedi";
import { Post } from "@package/api-types";

@Service()
export class PostRepository {
  create = async (postInfo: Post.CreateReq, userId: string) => {
    await client.post.create({ data: { ...postInfo, userId } });
  };

  removeById = async (id: number) => {
    await client.post.delete({ where: { id } });
  };

  updateById = async (id: number, postInfo: Post.UpdateReq, userId: string) => {
    await client.post.update({ where: { id }, data: { ...postInfo } });
  };

  getAll = async (from: number) => {
    return await client.post.findMany({ skip: from, take: from + 20 });
  };

  getById = async (id: number) => {
    return await client.post.findMany({ where: { id } });
  };
}
