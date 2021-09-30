/**
 * Load script and return load status as Promise
 *
 * @param name
 * @param src
 * @param defer
 * @returns {Promise<unknown>}
 */
export function load(
  name: string,
  src: string,
  defer = true,
  async = true
): Promise<unknown> {
  if (typeof document === "undefined") {
    return Promise.reject(new Error("No document element"));
  }

  const scriptElement = new Promise((resolve, reject) => {
    const head = document.head || document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.defer = defer;
    script.async = async;
    script.onload = () => {
      resolve((<never>window)[name]);
    };
    script.onerror = () => {
      reject();
    };
    head.appendChild(script);
    script.src = src;
  });
  return scriptElement;
}

/**
 * Doesn't make much sense, does it?!
 * @deprecated
 * @param src base url for the img's src attribute
 * @param id pid for the tracking campaign
 */
export function loadNoscript(src: string, id: string): void {
  if (typeof document === "undefined") {
    return;
  }
  const head = document.head || document.getElementsByTagName("head")[0];
  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.height = 1;
  img.width = 1;
  img.src = `${src}?id=${id}&ev=PageView&noscript=1`;
  img.style.display = "none";
  noscript.appendChild(img);
  head.appendChild(noscript);
}

export const isObject = (item: { [x: string]: unknown }): boolean => {
  return item && typeof item === "object" && !Array.isArray(item);
};

export const isBrowser = (): boolean => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  return true;
};
