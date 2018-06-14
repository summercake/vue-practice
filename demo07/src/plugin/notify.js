import modal from './notify.vue'
let notify = {

}

notify.install = function (Vue, options = { delay: 3000 }) {
    Vue.prototype.$notify = function (message, opts) {
        if (notify.el) return;
        options = { ...options, ...opts };
        let V = Vue.extend(modal);
        let vm = new V;
        let oDIv = document.createElement('div');
        vm.$mount(oDIv);
        document.body.appendChild(vm.$el);
        notify.el = vm.$el;
        setTimeout(() => {
            document.body.removeChild(vm.$el)
            notify.el = null;
        }, options.delay);
    }
}

export default notify;