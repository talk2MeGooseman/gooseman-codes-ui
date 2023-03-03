import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import html from "vite-plugin-html";
import svgrPlugin from "vite-plugin-svgr";


const ENV_PREFIX = "REACT_APP_";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      svgrPlugin({
        svgrOptions: {
          icon: true,
          // ...svgr options (https://react-svgr.com/docs/options/)
        },
      }),
      envCompatible({ prefix: ENV_PREFIX }),
      react({
        babel: {
          plugins: [
            [
              "babel-plugin-styled-components",
              {
                displayName: true,
                fileName: false,
              },
            ],
          ],
        },
      })
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: "build",
    },
  };
});
