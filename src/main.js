import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


const base = axios.create({  ///definicion de constante para piticiones a url
  //baseURL:'https://glacial-everglades-74306.herokuapp.com'   ///esta api era la anterior 
  baseURL:'http://localhost:3000' /// esta api es la que hicimos
})

Vue.prototype.$http = base;    ///opcion de como utilizar la url
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

