//import { from } from 'core-js/fn/array'
import Vue from 'vue'
import VueRouter from 'vue-router'

//import Home from '../views/Home.vue' //cuando se necesita que eeste disponible desde la carga de la pagina

Vue.use(VueRouter)

const routes = [
  {
    
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue')
    // component: Home
  },
  
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Login.vue'),
    //se carga cuando se solicite al click optimizar recursos
    // meta:{                  //requiere autenticacion  data no propia identifica la data que nos interesa
    //   requiresAuth:true,      ///se guarda en esta variable un true
    //}   ///esta ruta requiere autenticacion
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/About.vue'),
    //se carga cuando se solicite al click optimizar recursos
     meta:{                  //requiere autenticacion  data no propia identifica la data que nos interesa
       requiresAuth:true,      ///se guarda en esta variable un true
    }   ///esta ruta requiere autenticacion
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//si la ruta coincide con record verifique el meta el valor de requieresauth esta en la ruta que estamos visitando si tiene el token
router.beforeEach(( to,from,next)  =>{ 
  if(to.matched.some(record => record.meta.requiresAuth)) ///pregunta que si la ruta requiere autenticacion
  {
    if(localStorage.getItem('jwt')=== null){
      next({ path:'/'})  ///este if no permite que siga a home y lo deja en /
    }
    else{
      next();  ///pasa que siga
    }  

  }
  
  else{
    next();  ///pasa que siga
  }

  }
)



export default router
