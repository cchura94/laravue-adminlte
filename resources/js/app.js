require('./bootstrap');

window.Vue = require('vue').default;
import router from './router/index'
import App from './App.vue'

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    router,
    render: h => h(App),
    el: '#app',
});
