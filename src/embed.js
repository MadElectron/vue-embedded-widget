import { createApp } from "vue";
import { ElButton, ElDialog, ElSteps, ElRadio } from "element-plus";
import "element-plus/theme-chalk/el-button.css";
import "element-plus/theme-chalk/el-dialog.css";
import "element-plus/theme-chalk/el-step.css";
import "element-plus/theme-chalk/el-steps.css";
import "element-plus/theme-chalk/el-radio-button.css";
import "element-plus/theme-chalk/el-radio-group.css";
import Widget from "@/Widget.vue";
import interFontBase64 from "@/assets/fonts/Inter_24pt-Regular.woff2?inline";
import robotoFontBase64 from "@/assets/fonts/Roboto_SemiCondensed-Light.woff2?inline";
import { createI18n } from "vue-i18n";
import { messages, pluralRules } from "@/utils/i18n";
import "@/assets/styles/dialog.scss";

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "en",
  messages,
  pluralRules,
});

function appendStyle(container, content) {
  const style = document.createElement("style");
  style.textContent = content;
  container.appendChild(style);
}

(async function () {
  /**
   * Shadow DOM init
   */
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
  const fonts = `
    @font-face {
      font-family: "Inter";
      src: url(${interFontBase64}) format("truetype");
    }
    @font-face {
      font-family: "Roboto";
      src: url(${robotoFontBase64}) format("truetype");
    }
    `;
  appendStyle(shadow, fonts);

  /**
   * Dynamic CSS
   */
  const styleRef = script?.dataset?.css || "/style.css";
  if (styleRef) {
    const cssText = await fetch(styleRef).then((r) => r.text());
    appendStyle(shadow, cssText);
  }

  /**
   * Props
   */
  // Price is cast to component as number
  let price = script?.dataset?.price || 0;
  if (+price !== price) {
    price = price.replace(/\D/g, "");
  }

  const props = {
    price,
  };

  const width = script?.dataset?.width;
  if (width) {
    props.width = width;
  }

  /**
   * Finalization
   */
  const app = createApp(Widget, props);
  app.use(i18n);
  app.use(ElButton);
  app.use(ElDialog);
  app.use(ElSteps);
  app.use(ElRadio);
  app.mount(mountPoint);
})();
