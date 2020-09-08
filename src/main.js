import Vue from 'vue';
import App from './App.vue';

Vue.component('card-list', require('@/components/CardList.vue').default);

new Vue({
  render: h => h(App)
}).$mount('#app');
