import { defineConfig } from "vite";

import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      img: "/src/img",
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "pages/contacts.html"),
        // nested: resolve(__dirname, "pages/contacts.html"), ше файли html
      },
      output: {
        assetFileNames: (assetInfo) => {
          let info = assetInfo.name.split(".");
          let extType = info[info.length - 1];
          if (/png|jpeg|jpg|svg|gif|tiff|bmp|webp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2/.test(extType)) {
            extType = "css/fonts";
          } else if (/html/i.test(extType)) {
            return `html/[name]-[hash].html`;
          }
          return `${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
  },
});
