import { isBrowser } from "../utils";
import { getOptions } from "../options";

const assignGlobalProperty = (id: string, value: boolean) => {
  if (!isBrowser()) {
    return;
  }

  window[`fbq-disable-${id}`] = value;
};

export default (value = true): void => {
  const { config } = getOptions();

  assignGlobalProperty(config.id, value);
};
