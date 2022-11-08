import { createApp } from 'vue'
import {VueRouter} from 'vue-router'
import App from './App.vue'
import Box1 from './components/Box1.vue'
import Box2 from './components/Box2.vue'
import MyApp from  './components/myComponent.vue'



const routes = [
    { path: '/', component:Box1 },
    { path: '/box2', component: Box2 },
  ]

  const router =  new VueRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
  
//createApp(MyApp).mount('#app')
