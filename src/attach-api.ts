import _Vue from "vue";

const attachApi = (Vue: typeof _Vue): void => {
  Vue.prototype.$fbq = {};
};

export default attachApi;
