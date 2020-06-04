import Vue from 'vue'
Vue.use(VueRouter)
import App from '../App.vue'
import DoctorList from '../dome/doctor-list.vue'
console.log(123)
const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        // component: App,
        redirect: '/doctor-list',
      },
      {
          path: '/doctor-list',
          name: 'doctor-list',
          component: DoctorList
      },
      {
        path: '*',
        name: '404',
        component: DoctorList
    }
     
      
    
    ]
  })
  
  export default router