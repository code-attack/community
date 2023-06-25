import { client } from "@prisma";
import { Service } from "typedi";
import { IBeforeChat, IChatSend } from "@package/api-types/src/chat";

@Service()
export class ChatRepository {
  async create() {
    return await client.room.create();
  }
  async send(params: IChatSend) {
    return await client.chat.create({ data: params });
  }
  async beforeChat(params: IBeforeChat) {
    return await client.chat.findMany({
      where: params,
      orderBy: { id: "asc" },
    });
  }
}
