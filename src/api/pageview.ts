import { isBrowser } from "../utils";
import event from "./event";

export default (): void => {
  if (!isBrowser()) {
    return;
  }

  event("track", "PageView");
};
