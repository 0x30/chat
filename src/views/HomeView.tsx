import { StatusView } from "@/components/StatusView";
import { joinChatRoom, sendTextMsg } from "@/utils/libChatRoom";
import { defineComponent, onMounted, ref } from "vue";
import Style from "./HomeView.module.scss";
import MessagesView from "../components/MessagesView";
import { Chatroom } from "@/utils/imType";

export default defineComponent(() => {
  const chatRoom = ref<Chatroom>();

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
    return (
      <div class={Style.homeView}>
        <StatusView></StatusView>
        <MessagesView />
        <div style={{ backgroundColor: "red" }}>
          <input
            type="text"
            onInput={ev => (inputRef.value = (ev.target as any).value)}
          />
          <button onClick={sendMessage}>发送</button>
        </div>
      </div>
    );
  };
});
