import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
// 一级路由
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Map from '../components/Map.vue'
// 二级路由
import Activity from '../components/about/Activity.vue'
import Contact from '../components/about/Contact.vue'
import Delivery from '../components/about/Delivery.vue'
import History from '../components/about/History.vue'
// 三级路由
import Address from '../components/about/contact/Address.vue'
import Person from '../components/about/contact/Person.vue'
import Tel from '../components/about/contact/Tel.vue'


import Details from '../components/Details'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        'history': History
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('currentUser') == '5969474891@qq.com') {
          next()
        } else {
          alert('对不起，您没有管理权限。')
        }
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect: '/activity',
      children: [
        {
          path: '/activity',
          name: 'Activity',
          component: Activity
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
          redirect: '/ads',
          children: [
            {
              path: '/ads',
              name: 'Address',
              component: Address
            },
            {
              path: '/pes',
              name: 'Person',
              component: Person
            },
            {
              path: '/tel',
              name: 'Tel',
              component: Tel
            }
          ]
        },
        {
          path: '/delivery',
          name: 'Delivery',
          component: Delivery
        },
        {
          path: '/history',
          name: 'History',
          component: History
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ],
  mode: 'history'
})
