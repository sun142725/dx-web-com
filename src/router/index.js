import Vue from 'vue'
Vue.use(VueRouter)
import App from '../App.vue'
import DoctorList from '../dome/doctor-list.vue'
import ImageText from '../dome/image-text.vue'
import UrlUtils from '../../packages/url-utils/demo/index.vue'
import DxSign from '../../packages/dx-sign/demo/index.vue'
const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: App,
        redirect: '/doctor-list',
      },
      {
          path: '/doctor-list',
          name: 'doctor-list',
          title: '医生列表',
          component: DoctorList
      },
      {
          path: '/image-text',
          title: '图文组件',
          name: 'image-text',
          component: ImageText
      },
      {
          path: '/util/url-utils',
          name: 'UrlUtils',
          component: UrlUtils
      },
      {
          path: '/util/dx-sign',
          name: 'DxSign',
          component: DxSign
      },
      {
          path: '*',
          name: '404',
          title: '404',
          component: DoctorList
      }
     
      
    
    ]
  })
  
  export default router