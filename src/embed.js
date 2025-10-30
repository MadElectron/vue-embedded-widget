import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Widget from "@/Widget.vue";
import interFontBase64 from "@/assets/fonts/Inter_24pt-Regular.ttf?inline";
import robotoFontBase64 from "@/assets/fonts/Roboto_SemiCondensed-Light.ttf?inline";
import { createI18n } from "vue-i18n";
import { messages, pluralRules } from "@/utils/i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "en",
  messages,
  pluralRules,
});

(async function () {
  const containerId = script?.dataset?.container;
  let container = document.getElementById(containerId);

  if (!container) {
    console.warn(`[Widget] Container with id "${containerId}" not found.`);
    container = document.createElement("div");
    container.id = "vue-widget-root";
    document.body.appendChild(container);
  }

  const shadow = container.attachShadow({ mode: "open" });
  const mountPoint = document.createElement("div");
  shadow.appendChild(mountPoint);

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

  const app = createApp(Widget, {});
  app.use(i18n);
  app.use(ElementPlus);
  app.mount(mountPoint);
})();
