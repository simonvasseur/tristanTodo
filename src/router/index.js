import Vue from 'vue'
import Router from 'vue-router'
import TodoPage from '@/components/TodoPage'
import AutrePage from '@/components/AutrePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/otherpage',
      name: 'AutrePage',
      component: AutrePage
    }
  ]
})
