import { getOptions } from "../options";
import { isBrowser } from "../utils";
import event from "./event";

export default (id?: string): void => {
  const { config } = getOptions();

  if (!isBrowser()) {
    return;
  }

  event("init", id || config.id);
};
