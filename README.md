# anny-co/vue-lic

A Vue plugin to embed the Facebook Pixel into your webpage and control it like a Vue plugin.
In particular helpful with Nuxt and noscript Nuxt context.

## Usage

Install the package into your Nuxt project:

```
yarn add @anny.co/vue-fbq
```

Then, add a plugin to `./plugins` like this

```typescript
// vue-fbq.ts

import Vue from 'vue'
import VueLIC from '@anny.co/vue-fbq'
import type { Options } from '@anny.co/vue-fbq'
import { Plugin } from '@nuxt/types'

/**
 * vue-fbq plugin
 */
const vueGtag: Plugin = ({ app, $config }) => {
  // check env for FB_ENABLED
  if (!$config.fbEnabled) {
    return
  }
  if (process.client) {
    Vue.use(
      VueFBQ,
      {
        config: {
          id: $config.fbId,
        },
        bootstrap: false, // no automatic bootstrapping
        enabled: true,
        appName: $config.appName,
      } as Options,
      app.router
    )
  }
}

export default vueFBQ
```

Then, add the plugin to your `nuxt.config.{js,ts}`:

```javascript
plugins: [
  ...
  './plugins/vue-fbq.ts',
],
```

Lastly, make sure to fit your cookie guidelines and privacy policy to allow the usage of LinkedIn campaigns on your website and
remember **ask your users if they want to be tracked, don't do tracking by default!**

In your application, check if the user accepted tracking cookies and then bootstrap the plugin
```typescript
import { bootstrap as loadFbq } from '@anny.co/vue-fbq';

...

if (acceptedCookies) {
  loadFbq().then(() => {
    Vue.$fbq.optIn();
  }.catch((err) => {
    return;
  });
}
```