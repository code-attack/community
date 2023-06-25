import { client } from "@prisma";
import { Service } from "typedi";
import {
  IBeforeChat,
  IChatCreate,
  IChatSend,
} from "@package/api-types/src/chat";

@Service()
export class ChatRepository {
  async create({ opponent, mine }: IChatCreate) {
    return await client.room.create({
      data: {
        user: { connect: [{ account_id: opponent }, { account_id: mine }] },
      },
      include: { user: true },
    });
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
