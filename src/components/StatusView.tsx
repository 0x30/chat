import {
  getStatusDesc,
  getStatusMode,
  imStatusReplaySubject
} from "@/utils/imStatus";
import { ConnectionStatus } from "@rongcloud/imlib-v4";
import { defineComponent, onMounted, ref } from "vue";
import Style from "./StatusView.module.scss";

export const StatusView = defineComponent(() => {
  const imStatusRef = ref<{ statusMess: string; statusClass: string }>({
    statusClass: Style.warning,
    statusMess: getStatusDesc(ConnectionStatus.CONNECTING)
  });

  onMounted(() => {
    imStatusReplaySubject.subscribe({
      next(status) {
        imStatusRef.value = {
          statusClass: Style[getStatusMode(status)],
          statusMess: getStatusDesc(status)
        };
      }
    });
  });

  return () => {
    return (
      <div
        class={imStatusRef.value.statusClass}
        title={imStatusRef.value.statusMess}
      ></div>
    );
  };
});
