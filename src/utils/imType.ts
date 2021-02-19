import { im } from "./im";

type ReturnTypeAsync<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : T extends (...args: any) => infer R
  ? R
  : any;

export type Chatroom = ReturnType<typeof im.ChatRoom.get>;
export type IReceivedMessageV3 = ReturnTypeAsync<Required<Chatroom>["send"]>;
