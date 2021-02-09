import { createApp, defineComponent } from "vue";
import { RouterView } from "vue-router";
import router from "./router";
import store from "./store";

import "./utils/im";

export const App = defineComponent({
  name: "app",
  setup: () => {
    return () => {
      return <RouterView />;
    };
  }
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
