import Home from '../pages/Home/Home.vue'
import Classification from '../pages/Classification/Classification.vue'
import Knowledge from '../pages/Knowledge/Knowledge.vue'
import Find from '../pages/Knowledge/Find/Find.vue'
import Select from '../pages/Knowledge/Select/Select.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/classification',
    component: Classification,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/knowledge',
    component: Knowledge,
    children: [
      {
        path: 'find',
        component: Find,
        meta: {
          isShowFooter: true
        }
      },
      {
        path: 'select',
        component: Select,
        meta: {
          isShowFooter: true
        }
      },
      {
        path: '',
        redirect: 'select'
      }
    ]
  },
  {
    path: '/',
    redirect: '/knowledge'
  }
]