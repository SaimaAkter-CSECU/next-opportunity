import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueParticlesBg from "particles-bg-vue";
import VueRouter from 'vue-router'
import router from './router/routes'

Vue.config.productionTip = false
Vue.use(VueRouter) 
Vue.use(VueAwesomeSwiper) 
Vue.use(VueParticlesBg) 

new Vue({
  vuetify,
  router, 
  render: h => h(App)
}).$mount('#app')
