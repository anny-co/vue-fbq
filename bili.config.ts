import { Config } from "bili";
import { name } from "./package.json";

const isDev = process.env.NODE_ENV === "development";

const config: Config = {
  input: "./src/index.ts",
  externals: ["vue"],
  plugins: {
    typescript2: {
      // Override the config in `tsconfig.json`
      tsconfigOverride: {
        include: ["src"],
      },
    },
  },
  output: {
    dir: "./dist/",
    format: isDev ? ["esm"] : ["esm", "cjs", "umd", "umd-min"],
    moduleName: name,
  },
};

export default config;
