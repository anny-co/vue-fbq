import initialize from "./api/initialize";
import track from "./api/track";
import { getOptions } from "./options";
import registerGlobals from "./register-globals";
import { load } from "./utils";

export default async (): Promise<void> => {
  const {
    onReady,
    onError,
    globalObjectName,
    // config,
    customResourceURL,
    // customNoscriptURL,
    deferScriptLoad,
    disableScriptLoad,
  } = getOptions();

  registerGlobals();

  if (disableScriptLoad) {
    return;
  }

  try {
    // by default, load script asynchronously
    await load(globalObjectName, customResourceURL, deferScriptLoad, true);
    // loadNoscript(customNoscriptURL, config.id);
    if (onReady) {
      onReady(window[globalObjectName]);
    }
    initialize();
    track();
  } catch (err) {
    if (onError) {
      onError(err as Error);
    } else {
      throw err;
    }
  }
};
