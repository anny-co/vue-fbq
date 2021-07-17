/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
declare module "vue-fbq" {
  import _Vue from "vue";

  namespace Fbq {
    interface Fbq {
      (command: "event", eventName: EventNames | string, object: string): void;
    }

    type EventNames = "init" | "track";
  }

  export type FbqOptInOut = () => void;

  export type FbqEvent = (
    verb: Fbq.EventNames | string,
    object: string
  ) => void;

  export type FbqInit = (id?: string) => void;

  export type FbqTrack = () => void;

  export type Dictionary<T> = { [key: string]: T };

  export interface VueFbq {
    query: Fbq.Fbq;
    optIn: FbqOptInOut;
    optOut: FbqOptInOut;
    event: FbqEvent;
  }

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

  export class VueFbqPlugin {
    static install(Vue: typeof _Vue, options: Options): void;
  }

  export function boostrap(): Promise<Fbq.Fbq>;
  export function setOptions(options: Partial<Options>): void;

  export default VueFbqPlugin;

  export const event: FbqEvent;
  export const init: FbqInit;
  export const track: FbqTrack;
  export const optIn: FbqOptInOut;
  export const optOut: FbqOptInOut;

  module "vue/types/vue" {
    interface Vue {
      $fbq: VueFbq;
    }
  }
}
