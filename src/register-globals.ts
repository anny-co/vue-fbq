/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { isBrowser } from "./utils";
import { getOptions } from "./options";

export default (): void => {
  if (!isBrowser()) {
    return;
  }

  const { globalObjectName } = getOptions();

  if (window[globalObjectName]) {
    // already loaded
    return;
  }

  const fbq = function (...args: unknown[]) {
    (<any>fbq).callMethod
      ? (<any>fbq).callMethod.apply(fbq, args)
      : (<any>fbq).queue.push(...args);
  };

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
