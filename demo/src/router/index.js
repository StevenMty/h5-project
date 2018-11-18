import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import message from '@/components/message'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
