import { im } from "./im";
import { Chatroom, MESSAGE_TYPE } from "@rongcloud/imlib-v4";
import { messagesSubject } from "./imMessages";

export const joinChatRoom = async (id: string) => {
  const chatRoom = im.ChatRoom.get({ id });
  await chatRoom.join({ count: 30 });
  return chatRoom;
};

export const sendTextMsg = async (text: string, chatRoom: Chatroom) => {
  const message = await chatRoom.send({
    messageType: MESSAGE_TYPE.TEXT,
    content: {
      content: text
    }
  });
  messagesSubject.next(message);
};
