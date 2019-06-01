import Vue from 'vue'
import Router from 'vue-router'
import Items from '@/components/Items'
import ItemDetail from '@/components/ItemDetail'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Items',
      component: Items,
    },
    {
      path: '/all',
      component: Items,
    },
    {
      path: '/:id',
      name: 'ItemCategory',
      component: Items,
      props: route => ({id: Number(route.params.id)})
    },
    {
      path: '/',
      name: 'ItemKeyword',
      component: Items,
      props: route => ({searchWord: String(route.query.searchWord)})
    },
    {
      path: '/item/:itemId',
      name: 'ItemDetail',
      component: ItemDetail,
      props: route => ({itemId: Number(route.params.itemId)})
    },
  ],
  scrollBehavior (to, from, savePosition) {
      return { x: 0, y: 0 };
  }
})
