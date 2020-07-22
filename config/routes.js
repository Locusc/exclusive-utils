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
            hideInMenu: true
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
            path: '/encoding-encrypting',
            name: '编码/加密',
            icon: 'retweet',
            routes: [
              {
                path: '/encoding-encrypting/encoding/url-encoding',
                name: 'URL编码',
                component: './EncodingEncrypting/Encoding/UrlEncoding',
              },
            ],
          },
          {
            path: '/common-functions',
            name: '常用函数',
            icon: 'tool',
            routes: [
              {
                path: '/common-functions/moment-object-format',
                name: 'Moment对象转时间字符串',
                component: './CommonFunctions/MomentObjectFormat',
              },
            ],
          },
          {
            path: '/common-components',
            name: '常用组件',
            icon: 'cloud',
            routes: [
              {
                path: '/common-components/draggable-tags',
                name: 'Tag可拖动组件',
                component: './CommonComponents/DraggableTags',
              },
            ],
          },
          {
            name: '测试表格',
            icon: 'table',
            path: '/list',
            component: './ListTableList',
            hideInMenu: true
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