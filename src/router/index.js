import Vue from 'vue'
Vue.use(VueRouter)
import App from '../App.vue'
import UrlUtils from '../../packages/url-utils/demo/index.vue'
import DxSign from '../../packages/dx-sign/demo/index.vue'
const Docs = () => import(/* webpackChunkName: "doc" */ '@/docs/index.vue')
const Introduce = () => import(/* webpackChunkName: "doc" */ '@/docs/introduce.vue')
const Standard = () => import(/* webpackChunkName: "doc" */ '@/docs/standard.vue')

const Button = () => import(/* webpackChunkName: "doc" */ '@/packages/button/doc/index.vue')
const Switch = () => import(/* webpackChunkName: "doc" */ '@/packages/switch/doc/index.vue')

const H5Demo = () => import(/* webpackChunkName: "demo" */ '@/demo/h5.vue')
const H5Button = () => import(/* webpackChunkName: "demo" */ '@/packages/button/demo/index-h5.vue')

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: App,
        redirect: '/docs'
      },
      {
        path: '/docs',
        name: 'docs',
        component: Docs,
        redirect: '/docs/button',
        children: [
          {
            path: '/docs/introduce',
            name: 'introduce',
            component: Introduce
          },
          {
            path: '/docs/standard',
            name: 'standard',
            component: Standard
          },
          {
            path: '/docs/button',
            name: 'Button',
            component: Button
          },
          {
            path: '/docs/switch',
            name: 'switch',
            component: Switch
          },
          {
            path: '/docs/dx-sign',
            name: 'DxSign',
            component: DxSign
          },
          {
            path: '/docs/url-utils',
            name: 'UrlUtils',
            component: UrlUtils
          },
        ]
      },
      {
        path: '/h5',
        name: 'h5',
        component: H5Demo,
        redirect: '/docs/button',
        children: [
          {
            path: '/h5/button',
            name: 'h5-button',
            component: H5Button
          },
        ]
      },
      {
          path: '*',
          name: '404'
      }
    ]
  })
  
  export default router