import Vue from 'vue'
import App from './App'
import router from './router'
import {patButton} from 'pat-ui-test'

Vue.config.productionTip = false

console.log(patButton);
Vue.use(patButton);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
