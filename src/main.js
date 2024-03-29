import Vue from 'vue'
import App from './App.vue'

import router from "@/router";
import store from "@/store";
// import agination from '@/components/pagination'
Vue.config.productionTip = false;
// Vue.component(Pagination.name,Pagination)

new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
