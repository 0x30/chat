import { messagesSubject } from "@/utils/imMessages";
import { IReceivedMessageV3 } from "@rongcloud/imlib-v4";
import { defineComponent, ref } from "vue";
import Style from "./MessagesView.module.scss";
import MessageItem from "./MessageItem";

export default defineComponent(() => {
  const messagesRef = ref<IReceivedMessageV3[]>([]);

  messagesSubject.subscribe({
    next(message) {
      messagesRef.value.push(message);
    }
  });

  return () => {
    return (
      <div class={Style.messagesView}>
        {messagesRef.value.map(message => (
          <MessageItem message={message} />
        ))}
      </div>
    );
  };
});
