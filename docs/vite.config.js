import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
var options = {
  previewLength: 62,
  buttonLabel: "Buscar",
  placeholder: "Buscar7...",
};

export default defineConfig({
    plugins: [SearchPlugin(options)],
})
