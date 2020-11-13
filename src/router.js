import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   
    {
      path: '/Comdtiy',
      name: 'Comdtiy',
      component: () => import('./views/Comdtiy.vue'),
      children:[{
          path: '/One',
          name: 'One',
          component: () => import('./views/One.vue')  
          },
          {
            path:"/Comdtiy", //默认显示组件
            redirect:"/One"
            //重定向，页面默认显示One组件页面
          },
          {
            path: '/Two',
            name: 'Two',
            component: () => import('./views/Two.vue')  
          },
          {
            path: '/Three',
            name: 'Three',
            component: () => import('./views/Three.vue')  
          },
          {
            path: '/Four',
            name: 'Four',
            component: () => import('./views/Four.vue')  
          },
          {
            path: '/Five',
            name: 'Five',
            component: () => import('./views/Five.vue')  
          },
          {
            path: '/Six',
            name: 'Six',
            component: () => import('./views/Six.vue')  
          },
          {
            path: '/Seven',
            name: 'Seven',
            component: () => import('./views/Seven.vue')  
          },
          {
            path: '/Eight',
            name: 'Eight',
            component: () => import('./views/Eight.vue')  
          },
          {
            path: '/Nine',
            name: 'Nine',
            component: () => import('./views/Nine.vue')  
          }
        ]
        },
        {
          path:"/", //默认显示组件
          redirect:"/Comdtiy"
          //重定向，页面默认显示One组件页面
        },
       
  ]
})
