import Vue from 'vue'
import Router from 'vue-router'
import { Flex, FlexItem } from 'we-vue'

import Index from '@/rootgrades/Index'
import Index_first from '@/components/Index-first'
import Index_selected from '@/components/Index-selected'
import Index_ranking from '@/components/Index-ranking'
import Index_rs from '@/components/Index-rs'
import Index_mv from '@/components/Index-mv'
import Detail from '@/rootgrades/Detail'
import MusicMsg from '@/components/Detail-MusicMsg'

Vue.use(Flex).use(FlexItem)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      n: 'index',
      component: Index,
      redirect: '/first',
      children: [
        {
          path: '/first',
          name: 'first',
          n: 'first',
          component: Index_first
        },
        {
          path: '/selected',
          name: 'selected',
          n: 'selected',
          component: Index_selected
        },
        {
          path: '/ranking',
          name: 'ranking',
          n: 'ranking',
          component: Index_ranking
        },
        {
          path: '/rs',
          name: 'rs',
          n: 'rs',
          component: Index_rs
        },
        {
          path: '/mv',
          name: 'mv',
          n: 'mv',
          component: Index_mv
        },
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      n: 'detail',
      component: Detail,
      children: [
        {
          path: '/musicMsg',
          name: 'musicMsg',
          n: 'musicMsg',
          component: MusicMsg
        }
      ]
    }

  ]
})
