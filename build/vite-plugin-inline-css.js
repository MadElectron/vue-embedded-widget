// build/vite-plugin-inline-css.js
import fs from "fs";
import path from "path";

/**
 * Vite plugin: inline CSS from dist/*.css into the main JS file.
 * Supports Vite 7 + Rollup 4.
 */
export default function inlineCssPlugin() {
  return {
    name: "inline-css-into-js-v7",
    apply: "build",
    enforce: "post",
    async writeBundle(options) {
      const outDir = options.dir || "dist";
      if (!fs.existsSync(outDir)) return;

      const files = fs.readdirSync(outDir);
      const cssFiles = files.filter((f) => f.endsWith(".css"));
      if (!cssFiles.length) return;

      let cssCode = "";
      for (const file of cssFiles) {
        cssCode += fs.readFileSync(path.resolve(outDir, file), "utf8");
        fs.unlinkSync(path.resolve(outDir, file)); // удалить .css
      }

      const jsFile = files.find((f) => f.endsWith(".js"));
      if (!jsFile) return;

      const jsPath = path.resolve(outDir, jsFile);
      const jsCode = fs.readFileSync(jsPath, "utf8");
      const newCode =
        `const __WIDGET_CSS__ = ${JSON.stringify(cssCode)};\n` + jsCode;

      fs.writeFileSync(jsPath, newCode);
      console.log(
        `✅ [inline-css] CSS (${(cssCode.length / 1024).toFixed(
          1
        )} KB) inlined into ${jsFile}`
      );
    },
  };
}
