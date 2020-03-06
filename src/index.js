import Vue from 'vue'
import AppComponent from './components/AppComponent.vue'
// import {BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

new Vue({
   render: h => h(AppComponent)
 }).$mount('#app')

