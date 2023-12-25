import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
var options = {
  previewLength: 62,
  buttonLabel: "Buscar22",
  placeholder: "Buscar222...",
};

export default defineConfig({
    plugins: [SearchPlugin(options)],
})
