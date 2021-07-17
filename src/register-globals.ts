/* eslint-disable no-unused-vars */
import { isBrowser } from "./utils";
import { getOptions } from "./options";

type CallMethod = (...args: unknown[]) => void;

export default (): CallMethod | void => {
  if (!isBrowser()) {
    return;
  }

  const { globalObjectName, globalDataLayerName } = getOptions();

  if (window[globalObjectName] == null) {
    window[globalDataLayerName] = window[globalDataLayerName] || [];
    window[globalObjectName] = Object.assign(
      function (...args: unknown[]) {
        window[globalDataLayerName].queue.push(...args);
      },
      {
        loaded: true,
        version: "2.0",
      }
    );
  }

  return window[globalObjectName];
};
