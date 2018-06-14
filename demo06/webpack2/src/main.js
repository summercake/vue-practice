// document.write('Hello!!!');
// import Vue from 'vue/dist/vue';


import Vue from 'vue';
import App from './App.vue';



// new Vue({
//     el:'#app',
//     template:'<div>Hello Vue and webpack!!!</div>',
// })

new Vue({
    // render: function (createElement) {
    //     return createElement('h1', ['hello',
    //         createElement('span', ' one piece of hot news')
    //     ]);
    // }
    render:(h)=>h(App),
}).$mount('#app');