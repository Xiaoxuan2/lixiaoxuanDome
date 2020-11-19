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
          },
          {
            path: '/Ten',
            name: 'Ten',
            component: () => import('./views/Ten.vue')  
          },
          {
            path: '/Eleven',
            name: 'Eleven',
            component: () => import('./views/Eleven.vue')  
          },
          {
            path: '/Twelve',
            name: 'Twelve',
            component: () => import('./views/Twelve.vue')  
          },
          {
            path: '/Thirteen',
            name: 'Thirteen',
            component: () => import('./views/Thirteen.vue')  
          },
          {
            path: '/Fourteen',
            name: 'Fourteen',
            component: () => import('./views/Fourteen.vue')  
          },
          {
            path: '/Fifteen',
            name: 'Fifteen',
            component: () => import('./views/Fifteen.vue')  
          },
          {
            path: '/Sixteen',
            name: 'Sixteen',
            component: () => import('./views/Sixteen.vue')  
          },
            {
            path: '/Seventeen',
            name: 'Seventeen',
            component: () => import('./views/Seventeen.vue')  
          },
          {
            path: '/Eighteen',
            name: 'Eighteen',
            component: () => import('./views/Eighteen.vue')  
          },
          {
            path: '/Nineteen',
            name: 'Nineteen',
            component: () => import('./views/Nineteen.vue')  
          },
          {
            path: '/Twenty',
            name: 'Twenty',
            component: () => import('./views/Twenty.vue')  
          },
          {
            path: '/TwentyOne',
            name: 'TwentyOne',
            component: () => import('./views/TwentyOne.vue')  
          },
          {
            path: '/TwentyTwo',
            name: 'TwentyTwo',
            component: () => import('./views/TwentyTwo.vue')  
          },
          {
            path: '/TwentyTree',
            name: 'TwentyTree',
            component: () => import('./views/TwentyTree.vue')  
          },
          {
            path: '/TwentFrou',
            name: 'TwentFrou',
            component: () => import('./views/TwentFrou.vue')  
          },
          {
            path: '/TwentyFive',
            name: 'TwentyFive',
            component: () => import('./views/TwentyFive.vue')  
          },
          {
            path: '/TwentySix',
            name: 'TwentySix',
            component: () => import('./views/TwentySix.vue')  
          },
          {
            path: '/TwentySeven',
            name: 'TwentySeven',
            component: () => import('./views/TwentySeven.vue')  
          },
          {
            path: '/TwentyEight',
            name: 'TwentyEight',
            component: () => import('./views/TwentyEight.vue')  
          },
          {
            path: '/TwentyNine',
            name: 'TwentyNine',
            component: () => import('./views/TwentyNine.vue')  
          },
          {
            path: '/Thirty',
            name: 'Thirty',
            component: () => import('./views/Thirty.vue')  
          },
          {
            path: '/ThirtyOne',
            name: 'ThirtyOne',
            component: () => import('./views/ThirtyOne.vue')  
          },
          {
            path: '/ThirtyTwo',
            name: 'ThirtyTwo',
            component: () => import('./views/ThirtyTwo.vue')  
          },
          {
            path: '/ThirtyThree',
            name: 'ThirtyThree',
            component: () => import('./views/ThirtyThree.vue')  
          },
          {
            path: '/ThirtyFour',
            name: 'ThirtyFour',
            component: () => import('./views/ThirtyFour.vue')  
          },
          {
            path: '/ThirtyFive',
            name: 'ThirtyFive',
            component: () => import('./views/ThirtyFive.vue')  
          },
          {
            path: '/ThirtytSix',
            name: 'ThirtytSix',
            component: () => import('./views/ThirtytSix.vue')  
          },
          {
            path: '/ThirytSeven',
            name: 'ThirytSeven',
            component: () => import('./views/ThirytSeven.vue')  
          },
          {
            path: '/ThirtyEight',
            name: 'ThirtyEight',
            component: () => import('./views/ThirtyEight.vue')  
          },
          {
            path: '/ThirtyNine',
            name: 'ThirtyNine',
            component: () => import('./views/ThirtyNine.vue')  
          },
          {
            path: '/Forty',
            name: 'Forty',
            component: () => import('./views/Forty.vue')  
          },
          {
            path: '/FortyOne',
            name: 'FortyOne',
            component: () => import('./views/FortyOne.vue')  
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
