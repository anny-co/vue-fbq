import _Vue from "vue";
import attachApi from "./attach-api";
import { setOptions, getOptions, Options } from "./options";
import bootstrap from "./bootstrap";

const install = (Vue: typeof _Vue, options: Options): void => {
  attachApi(Vue);
  setOptions(options);

  if (getOptions().bootstrap) {
    bootstrap();
  }
};

export { default as disable } from "./api/disable";
export { default as event } from "./api/event";
export { default as initialize } from "./api/initialize";
export { default as optIn } from "./api/opt-in";
export { default as optOut } from "./api/opt-out";
export { default as pageview } from "./api/pageview";
export { default as query } from "./api/query";

export { default as bootstrap } from "./bootstrap";
export { setOptions } from "./options";

export { install };

export default install;