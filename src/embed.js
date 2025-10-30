import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Widget from "@/Widget.vue";
import interFontBase64 from "@/assets/fonts/Inter_24pt-Regular.ttf?inline";
import robotoFontBase64 from "@/assets/fonts/Roboto_SemiCondensed-Light.ttf?inline";

(async function () {
  if (document.getElementById("vue-widget-root")) return;

  const root = document.createElement("div");
  root.id = "vue-widget-root";
  document.body.appendChild(root);

  const shadow = root.attachShadow({ mode: "open" });

  /**
   * @todo remove
   */
  const script = document.currentScript;
  const title = script?.dataset?.title || "Виджет по умолчанию";

  /**
   * Fonts
   */
  const style = document.createElement("style");
  style.textContent = `
    @font-face {
      font-family: "Inter";
      src: url(${interFontBase64}) format("truetype");
    }
    @font-face {
      font-family: "Roboto";
      src: url(${robotoFontBase64}) format("truetype");
    }
    `;
  shadow.appendChild(style);

  //
  const mountPoint = document.createElement("div");
  shadow.appendChild(mountPoint);

  /**
   * CSS
   */
  const styleRef = script?.dataset?.css || "/style.css";
  if (styleRef) {
    const cssText = await fetch(styleRef).then((r) => r.text());
    const style = document.createElement("style");
    style.textContent = cssText;
    shadow.appendChild(style);
  }

  const app = createApp(Widget, { title });
  app.use(ElementPlus);
  app.mount(mountPoint);
})();
