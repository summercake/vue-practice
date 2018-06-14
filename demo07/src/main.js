import Vue from 'vue';
import App from './App.vue';
import Router from './router/index.js';
import Notify from './plugin/notify.js';
Vue.use(Notify);

new Vue({
    el: '#app',
    Router,
    render: (h) => h(App),
})
