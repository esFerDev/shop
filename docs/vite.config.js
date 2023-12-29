import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Searh documentation...",
};

export default defineConfig({
    plugins: [SearchPlugin(options)],
})
