import { isBrowser } from "./utils";
import { getOptions } from "./options";

export default (): void => {
  if (!isBrowser()) {
    return;
  }

  const { globalObjectName, globalDataLayerName } = getOptions();

  if (window[globalObjectName] == null) {
    window[globalDataLayerName].queue = window[globalDataLayerName] || [];
    window[globalDataLayerName].loaded = true;
    window[globalDataLayerName].version = "2.0";
    window[globalObjectName] = function (...args: unknown[]) {
      window[globalDataLayerName].queue.push(...args);
    };
  }

  window[globalObjectName]("js", new Date());

  return window[globalObjectName];
};
