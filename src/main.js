import Vue from 'vue'
import App from './App.vue'

//== import jquery ==//
//== start ==//
import 'jquery'
//== end ==//

//== import bootstrap ==//
//== start ==//
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//== end ==//

//== import fontAwesome ==//
//== start ==//
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
//== end ==//

//== import general style file ==//
//== start ==//
import './general-style/main.scss'
//== end ==//

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
