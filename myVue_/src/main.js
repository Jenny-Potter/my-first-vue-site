import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
Vue.use(VueResource);
export const eventBus=new Vue()
new Vue({
  el:'#app',
  router,
  components:{App},//引用组件用{}括起来
  template:'<App/>',
})
