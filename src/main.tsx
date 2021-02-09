import { createApp, defineComponent } from "vue";
import { RouterView } from "vue-router";
import router from "./router";
import store from "./store";
import "@/styles";
import { im } from "./utils/im";

export const App = defineComponent({
  name: "app",
  setup: () => {
    return () => {
      return <RouterView />;
    };
  }
});

const initApp = async () => {
  await im.connect({
    token:
      "fRptva34YoRS6pIwg4jhSGlD/L5vIfcpG4ByHpeeDVs=@3uzh.cn.rongnav.com;3uzh.cn.rongcfg.com"
  });

  createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
};

initApp();
