import disable from "./disable";
import initialize from "./initialize";
import track from "./track";

/**
 * @deprecated done from bootstrapping to unify api with vue-gtag
 */
export default (): void => {
  disable(false);

  // spawn initial events:
  // fbq('init', 'ID');
  // fbq('track', 'PageView');
  initialize();
  track();
};
