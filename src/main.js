import Vue from 'vue'
import App from './App'
import router from './router'
import  MintUi from "mint-ui"
import store from "./store/index"
import 'mint-ui/lib/style.css'
import Vuelazyload from "vue-lazyload"
import "./assets/iconfont/iconfont.css"
import "./assets/iconfont/iconfont.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';


// import BScroll from "better-scroll"
Vue.use(Vuelazyload)
Vue.use(ElementUI)
Vue.use(MintUi)
Vue.use(iView)
import axios from 'axios'
Vue.prototype.$http = axios
                                                                                                                                          

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
