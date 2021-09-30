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

const noscript = (
  id: string,
  src = "https://www.facebook.com/tr"
): HTMLElement => {
  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.height = 1;
  img.width = 1;
  img.src = `${src}?id=${id}&ev=PageView&noscript=1`;
  img.style.display = "none";
  noscript.appendChild(img);
  return noscript;
};

export { default as disable } from "./api/disable";
export { default as event } from "./api/event";
export { default as initialize } from "./api/initialize";
export { default as optIn } from "./api/opt-in";
export { default as optOut } from "./api/opt-out";
export { default as track } from "./api/track";
export { default as query } from "./api/query";

export { default as bootstrap } from "./bootstrap";
export { setOptions } from "./options";

export { install, noscript };

export default install;
