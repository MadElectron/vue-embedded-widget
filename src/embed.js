import { createApp } from "vue";
import { ElButton, ElDialog, ElSteps, ElRadio } from "element-plus";
import Widget from "@/Widget.vue";
import interFontBase64 from "@/assets/fonts/Inter_24pt-Regular.woff2?inline";
import robotoFontBase64 from "@/assets/fonts/Roboto_SemiCondensed-Light.woff2?inline";
import { createI18n } from "vue-i18n";
import { messages, pluralRules } from "@/utils/i18n";
import staticCss from "./assets/styles/embed.scss?inline";

// i18n init
const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "en",
  messages,
  pluralRules,
});

// вспомогательная функция для добавления <style>
function appendStyle(container, cssText) {
  const style = document.createElement("style");
  style.textContent = cssText;
  container.appendChild(style);
}

(async function () {
  const script = document.currentScript;

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
   * Fonts (встраиваем через base64)
   */
  const fonts = `
    @font-face {
      font-family: "Inter";
      src: url(${interFontBase64}) format("woff2");
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: "Roboto";
      src: url(${robotoFontBase64}) format("woff2");
      font-weight: 300;
      font-display: swap;
    }
  `;
  appendStyle(shadow, fonts);

  /**
   * Static CSS
   */
  appendStyle(shadow, staticCss);

  /**
   * Widget CSS (встраивается плагином в vite.config.js)
   */
  if (typeof __WIDGET_CSS__ !== "undefined") {
    appendStyle(shadow, __WIDGET_CSS__);
  } else {
    console.warn("[Widget] Inline CSS not found – check vite plugin.");
  }

  /**
   * Props
   */
  let price = script?.dataset?.price || 0;
  if (+price !== price) {
    price = parseFloat(price.replace(/\D/g, "")) || 0;
  }

  const props = { price };

  const width = script?.dataset?.width;
  if (width) props.width = width;

  /**
   * Mount widget
   */
  const app = createApp(Widget, props);
  app.use(i18n);
  app.use(ElButton);
  app.use(ElDialog);
  app.use(ElSteps);
  app.use(ElRadio);
  app.mount(mountPoint);
})();
