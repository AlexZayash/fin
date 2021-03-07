import store from './store'
import App from './App.vue'
import router from "@/router"
import axios from 'axios'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ButtonPlugin } from 'bootstrap-vue'
import VueAxios from "vue-axios";
Vue.use(ButtonPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)



new Vue({
  ButtonPlugin,BootstrapVue,IconsPlugin,
  axios,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
