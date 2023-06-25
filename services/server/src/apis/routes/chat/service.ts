import { Service } from "typedi";
import { ChatRepository } from "@/repositorys/chat.repository";
import {
  IBeforeChat,
  IChatCreate,
  IChatSend,
} from "@package/api-types/src/chat";
@Service()
export class ChatService {
  constructor(private readonly chatRepository: ChatRepository) {}
  create(params: IChatCreate) {
    return this.chatRepository.create(params);
  }
  send(params: IChatSend) {
    return this.chatRepository.send(params);
  }
  befoereChat(params: IBeforeChat) {
    return this.chatRepository.beforeChat(params);
  }
}
