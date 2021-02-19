import { im } from "./im";
import { MESSAGE_TYPE } from "@rongcloud/imlib-v4";
import { messagesSubject } from "./imMessages";
import { Chatroom } from "./imType";

export const joinChatRoom = async (id: string) => {
  const chatRoom = im.ChatRoom.get({ id });
  await chatRoom.join({ count: 2 });
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
