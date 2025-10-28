import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Widget from "./Widget.vue";

(function () {
  if (document.getElementById("vue-widget-root")) return;

  const root = document.createElement("div");
  root.id = "vue-widget-root";
  document.body.appendChild(root);

  const shadow = root.attachShadow({ mode: "open" });
  const mountPoint = document.createElement("div");
  shadow.appendChild(mountPoint);

  const script = document.currentScript;
  const title = script?.dataset?.title || "Виджет по умолчанию";

  const styleRef = script?.dataset?.css || "/style.css";

  if (styleRef) {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = styleRef;
    shadow.appendChild(style);
  }

  const app = createApp(Widget, { title });
  app.use(ElementPlus);
  app.mount(mountPoint);
})();
