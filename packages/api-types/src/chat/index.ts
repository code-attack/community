export interface IChatSend {
  account_id: string;
  roomId: string;
  msg: string;
}
export interface IBeforeChat {
  roomId: string;
}
export interface IChatCreate {
  opponent: string;
  mine: string;
}
