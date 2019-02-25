import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 /* {
    path: '',
    title: 'Personal',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  }, */
  {
    path: '/starter',
    title: '课程项目主页',
    icon: 'mdi mdi-gauge',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  }, 
  /*
  {
    path: '',
    title: 'UI Components',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  }, */
  {
    path: '',
    title: 'Bootstrap基础',
    icon: 'mdi mdi-bullseye',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/component/week01',
        title: 'Week01',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/buttons',
        title: 'Buttons',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/cards',
        title: 'Cards',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Menu Levels',
    icon: 'mdi mdi-arrange-send-backward',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: 'javascript:void(0);',
        title: 'Second Level',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
      },
      {
        path: '',
        title: 'Second Child',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: 'javascript:void(0);',
            title: 'Third 1.1',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: 'javascript:void(0);',
            title: 'Third 1.2',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          }
        ]
      }
    ]
  }
];
