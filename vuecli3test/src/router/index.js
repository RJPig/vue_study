import VueRouter from 'vue-router';
import Vue from 'vue';
// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';

// 路由懒加载
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');

const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile');

// 通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 创建router对象
const routes = [
  // 设置默认值
  {
    path: '',
    // 重定向
    redirect: '/home'
  },


  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    // 嵌套路由
    children: [
      {
        path: '',
        component: HomeNews
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userid',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

// 配置路由和组件之间的关系
const router = new VueRouter({
  routes,
  // 默认为hash方式,此时url会有#,改为history可解决该问题
  mode: 'history',
  // 当点击某个按钮时class名字定义为active
  linkActiveClass: 'active'
})

// 前置导航守卫guard:需要调用next()函数
router.beforeEach((to, from, next) => {
  next()
  // console.log(to);
  console.log('++++++');
  
  document.title = to.matched[0].meta.title
})

// 后置钩子hook不需要调用next()函数
router.afterEach((to, from) => {
  console.log('------');
  
})
// 将router对象传入到Vue实例中
export default router