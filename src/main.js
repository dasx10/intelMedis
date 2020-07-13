import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


firebase.initializeApp({
  apiKey: "AIzaSyAVtrHtX4CuMKFLhNnURjKyhuXhMYcZERw",
  authDomain: "intelmedis-b3c72.firebaseapp.com",
  databaseURL: "https://intelmedis-b3c72.firebaseio.com",
  projectId: "intelmedis-b3c72",
  storageBucket: "intelmedis-b3c72.appspot.com",
  messagingSenderId: "566647048888",
  appId: "1:566647048888:web:376d5be245cc9edfffc24d",
  measurementId: "G-L1T6RMY6TC"
});
// firebase.analytics();

let app;

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
})

Vue.config.productionTip = false


