/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import _Vue from "vue";
import * as api from "./api";

const attachApi = (Vue: typeof _Vue) => (Vue.prototype.$fbq = api);

export default attachApi;
