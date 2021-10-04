import { Config } from "bili";
import { name } from "./package.json";

const config: Config = {
  input: "./src/index.ts",
  externals: ["vue"],
  plugins: {
    typescript2: {},
  },
  output: {
    dir: "./dist/",
    format: ["esm"],
    moduleName: name,
  },
};

export default config;
