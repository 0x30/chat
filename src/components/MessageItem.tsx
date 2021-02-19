import { IReceivedMessageV3 } from "@/utils/imType";
import { MESSAGE_TYPE } from "@rongcloud/imlib-v4";
import { defineComponent, PropType } from "vue";
import Style from "./MessageItem.module.scss";

const MessageBasicItem = defineComponent((_, { slots }) => {
  return () => {
    return (
      <div class={Style.basicItem}>
        <img
          class={Style.headPhoto}
          src="http://pic.962.net/up/2020-2/15816677587259703.jpg"
        />
        {slots.default!()}
      </div>
    );
  };
});

const TextMessageItem = defineComponent({
  props: {
    message: {
      type: Object as PropType<IReceivedMessageV3>,
      required: true
    }
  },
  setup: props => {
    return () => {
      return (
        <MessageBasicItem>
          <span class={Style.textContent}>
            {(props.message.content as any).content}
          </span>
        </MessageBasicItem>
      );
    };
  }
});

export default defineComponent({
  props: {
    message: {
      type: Object as PropType<IReceivedMessageV3>,
      required: true
    }
  },
  setup: props => {
    return () => {
      switch (props.message.messageType) {
        case MESSAGE_TYPE.TEXT:
          return <TextMessageItem message={props.message} />;
        default:
          return <div>无</div>;
      }
    };
  }
});
