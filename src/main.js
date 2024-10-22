//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 创建事件总线
Vue.prototype.$bus = new Vue();

// 关闭 Vue 的生产提示
Vue.config.productionTip = false;

// 创建 vm
new Vue({
  el: '#app',
  render: h => h(App),
});