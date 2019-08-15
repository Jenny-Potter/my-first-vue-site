import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import meta from '../components/meta';
import metainfo from '../components/metainfo';
import meta1 from '../components/meta1';
import meta2 from '../components/meta2';
import meta3 from '../components/meta3';
export default new Router({
  routes:
  [
    {
      path:'',
      name:'meta',
      component:meta,},
    {
      path: '/meta',
      name: 'meta',
      component: meta,
    },
    {
      path: '/metainfo',
      name: 'metainfo',
      component: metainfo,
    },
    {
      path:'/meta1',
      name:'meta1',
      component:meta1,

    },
    {
      path:'/meta2',
      name:'meta2',
      component:meta2,

    },
    {
      path:'/meta3',
      name:'meta3',
      component:meta3,

    },
  ]
})

