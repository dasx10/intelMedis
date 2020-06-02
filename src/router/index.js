import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component:()=>import('../views/contact.vue')
  },
  {
    path:'/document',
    name:'document',
    component:()=>import('../views/document.vue')
  },
  {
    path:'/doctor',
    name:'doctor',
    component:()=>import('../views/doctor.vue')
  },
  {
    path:'/cost',
    name:'cost',
    component:()=>import('../views/cost.vue')
  },
  {
    path:'/drink',
    name:'drink',
    component:()=>import('../views/drink.vue')
  },
  {
    path:'/alc',
    name:'alc',
    component:()=>import('../views/alc.vue')
  },
  {
    path:'/drug',
    name:'drug',
    component:()=>import('../views/drug.vue')
  },{
    path:'/game',
    name:'game',
    component:()=>import('../views/game.vue')
  }
  ,{
    path:'/fiz',
    name:'fiz',
    component:()=>import('../views/fiz/index.vue')
  },{
    path:'/fiz/info',
    name:'fiz',
    component:()=>import('../views/fiz/info.vue')
  },{
    path:'/fiz/electro',
    name:'electro',
    component:()=>import('../views/fiz/electro/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
