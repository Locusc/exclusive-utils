export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/introduction',
          },
          {
            path: '/introduction',
            name: '简介',
            icon: 'edit',
            component: './Introduction',
          },
          {
            path: '/test',
            name: '测试专用',
            icon: 'edit',
            component: './TestPage',
          },
          {
            path: '/json-parsing',
            name: 'JSON解析',
            icon: 'thunderbolt',
            component: './JsonParsing',
          },
          {
            path: '/code-comparison',
            name: '代码对比',
            icon: 'switcher',
            component: './CodeComparison',
          },
          {
            path: '/admin',
            name: '常用函数',
            icon: 'tool',
            component: './Admin',
            routes: [
              {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
              },
            ],
          },
          {
            path: '/common-components',
            name: '常用组件',
            icon: 'cloud',
            component: './CommonComponents',
          },
          {
            name: '测试表格',
            icon: 'table',
            path: '/list',
            component: './ListTableList',
          },
          {
            component: './GlobalComponents/404',
          },
        ],
      },
      {
        component: './GlobalComponents/404',
      },
    ],
  },
  {
    component: './GlobalComponents/404',
  },
]