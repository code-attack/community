import { client } from "@prisma";
import { Service } from "typedi";
import { Post } from "@package/api-types";

export interface Create extends Post.CreateReq {
  thumbnail: string;
}

@Service()
export class PostRepository {
  create = async (postInfo: Create, userId: string) => {
    await client.post.create({ data: { ...postInfo, userId } });
  };

  removeById = async (id: number) => {
    await client.post.delete({ where: { id } });
  };

  updateById = async (id: number, postInfo: Post.UpdateReq, userId: string) => {
    await client.post.update({ where: { id }, data: { ...postInfo } });
  };

  getAll = async (from: number) => {
    return await client.post.findMany({
      skip: from,
      take: from + 20,
      select: {
        id: true,
        title: true,
        content: true,
        thumbnail: true,
        createdAt: true,
        user: {
          select: {
            name: true,
            introduce: true,
            technology: true,
            profile_img: true,
          },
        },
      },
    });
  };

  getById = async (id: number) => {
    return await client.post.findMany({ where: { id } });
  };
}
