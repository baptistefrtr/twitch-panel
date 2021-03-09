import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyDVt3ZtoN90vFOnRJKg9mXTDIGrTbC65ck",
  authDomain: "twitch-pannel.firebaseapp.com",
  databaseURL: "https://twitch-pannel.firebaseio.com",
  projectId: "twitch-pannel",
  storageBucket: "twitch-pannel.appspot.com",
  messagingSenderId: "784479180668",
  appId: "1:784479180668:web:08bb3b629f817e160c76f9"
};

const firebaseApp = firebase.initializeApp(configOptions);

Vue.prototype.$firebase = firebase;

const db = firebaseApp.firestore();
export default db;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
