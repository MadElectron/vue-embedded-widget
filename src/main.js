import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Widget from "./Widget.vue";

const app = createApp(Widget, { title: "Локальный режим" });
app.use(ElementPlus);
app.mount("#app");
