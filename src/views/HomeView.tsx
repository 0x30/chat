import { StatusView } from "@/components/StatusView";
import { messagesSubject } from "@/utils/imMessages";
import { imStatusIsSuccess } from "@/utils/imStatus";
import { joinChatRoom, sendTextMsg } from "@/utils/libChatRoom";
import { Chatroom, IReceivedMessageV3 } from "@rongcloud/imlib-v4";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent(() => {
  const chatRoom = ref<Chatroom>();
  const messagesRef = ref<IReceivedMessageV3[]>([]);

  messagesSubject.subscribe({
    next(message) {
      console.log("接收到消息", message.content);
      messagesRef.value.push(message);
    }
  });

  onMounted(async () => {
    chatRoom.value = await joinChatRoom("1");
  });

  const inputRef = ref<string>("");

  const sendMessage = () => {
    if (chatRoom.value === undefined) {
      return;
    }
    sendTextMsg(inputRef.value, chatRoom.value);
  };

  return () => {
    const messageHtml = messagesRef.value.map(message => (
      <span>{(message.content as any).content}</span>
    ));

    return (
      <div>
        首页<StatusView></StatusView>
        {messageHtml}
        <input
          type="text"
          onInput={ev => (inputRef.value = (ev.target as any).value)}
        />
        <button onClick={sendMessage}>发送</button>
      </div>
    );
  };
});
