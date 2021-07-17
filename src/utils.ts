type LoadOptions = {
  preconnectOrigin?: string;
};

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
  async = true,
  options: LoadOptions = {}
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
    if (options.preconnectOrigin) {
      const link = document.createElement("link");

      link.href = options.preconnectOrigin;
      link.rel = "preconnect";
      head.appendChild(link);
    }
    head.appendChild(script);
    script.src = src;
  });
  return scriptElement;
}

/**
 * Doesn't make much sense, does it?!
 * @param src
 * @param id
 */
export function loadNoscript(src: string, id: string): void {
  if (typeof document === "undefined") {
    return;
  }
  /** <img height="1" width="1" style="display: none" src="https://www.facebook.com/tr?id=${this.$config.fbId}&ev=PageView&noscript=1"/> */
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
