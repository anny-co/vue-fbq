/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { isBrowser } from "./utils";
import { getOptions } from "./options";

export default (): void => {
  if (!isBrowser()) {
    return;
  }

  const { globalObjectName } = getOptions();

  // if (window.fbq) return;
  // const fbq = window.fbq = function () {
  //   fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
  // };
  // if (!window._fbq) window._fbq = fbq;
  // fbq.push = fbq;
  // fbq.loaded = !0;
  // fbq.version = "2.0";
  // fbq.queue = [];

  if (window[globalObjectName]) {
    // already loaded
    return;
  }

  const fbq = (window[globalObjectName] = function (...args: unknown[]) {
    (<any>fbq).callMethod
      ? (<any>fbq).callMethod.apply(fbq, args)
      : (<any>fbq).queue.push(...args);
  });

  if (!window["_" + globalObjectName]) {
    window["_" + globalObjectName] = fbq;
  }

  window[globalObjectName] = Object.assign(fbq, {
    loaded: true,
    version: "2.0",
    queue: [],
    push: fbq,
  });

  return window[globalObjectName];
};
