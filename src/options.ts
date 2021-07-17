/* eslint-disable no-unused-vars */

export interface Options {
  bootstrap: boolean;
  onReady(args?: unknown[]): unknown;
  onError(err: Error): void;
  globalDataLayerName: string;
  customResourceURL: string;
  customNoscriptURL: string;
  deferScriptLoad: boolean;
  enabled: boolean;
  disableScriptLoad: boolean;
  appName: string;
  globalObjectName: "fbq";
  config: {
    id: string;
  };
}

export const getDefaultOptions = (): Options => ({
  bootstrap: true,
  onReady: () => ({}),
  onError: () => ({}),
  globalDataLayerName: "_fbq",
  customResourceURL: "https://connect.facebook.net/en_US/fbevents.js",
  customNoscriptURL: "https://www.facebook.com/tr",
  deferScriptLoad: false,
  enabled: true,
  disableScriptLoad: false,
  appName: "",
  globalObjectName: "fbq",
  config: {
    id: "",
  },
});

let options: Options = getDefaultOptions();

export const setOptions = (_options: Partial<Options>): void => {
  options = { ...getDefaultOptions(), ..._options };
};

export const getOptions = (): Options => {
  return options;
};
