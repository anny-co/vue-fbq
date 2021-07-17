import { getOptions } from "./options";
import registerGlobals from "./register-globals";
import { load, loadNoscript } from "./utils";

export default async (): Promise<void> => {
  const {
    onReady,
    onError,
    globalObjectName,
    config,
    customResourceURL,
    customNoscriptURL,
    deferScriptLoad,
    disableScriptLoad,
  } = getOptions();

  registerGlobals();

  if (disableScriptLoad) {
    return;
  }

  try {
    await load(globalObjectName, customResourceURL, deferScriptLoad);
    loadNoscript(customNoscriptURL, config.id);
    if (onReady) {
      onReady(window[globalObjectName]);
    }
  } catch (err) {
    if (onError) {
      onError(err);
    }
    throw err;
  }
};
