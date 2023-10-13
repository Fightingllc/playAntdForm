import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import React from "react";
import { CalendarOutlined, CopyOutlined ,FileAddOutlined,WarningOutlined} from "@ant-design/icons";


const Home = lazy(() => import('../App'))
const BasicUse = lazy(() => import('../antd/01_basicUse'))
const DongTai = lazy(() => import('../antd/02_dongtai'))
const DepFields = lazy(() => import('../antd/03_depFields'))


// 导航守卫
// const BeforeEach = lazy(() => import("../components/BeforeEach/BeforeEach"))
// const NotAuth = lazy(()=> import('../views/NotAuth/NotAuth'))
// const NotFound = lazy(()=> import('../views/NotFound/NotFound'))
// const NotServer = lazy(()=> import('../views/NotServer/NotServer'))

// 扩展meta元信息接口与全局守卫
declare module 'react-router' {
    interface IndexRouteObject {
        meta?: {
            menu?: boolean,
            title?: string,
            icon?: React.ReactNode,
            auth?: boolean
        },
        name?: string
    }

    interface NonIndexRouteObject {
        meta?: {
            menu?: boolean,
            title?: string,
            icon?: React.ReactNode,
            auth?: boolean
        },
        name?: string
    }
}


export const routes: RouteObject[]= [
    // {
    //     path: '/',
    //     element: React.createElement(Navigate, {to: '/sign'})
    // },
 {
    path: '/',
    name:'home',
    element:  React.createElement(Home),
    // meta: {
    //     menu: true,
    //     title: '考勤管理',
    //     icon: React.createElement(CopyOutlined),
    //     auth: true
    // },
 },
    // children: [
        {
            path: '/basicUse',
            name:'basicUse',
            element: React.createElement(BasicUse),
            // meta: {
            //     menu: true,
            //     title: '基本使用',
            //     icon: React.createElement(CalendarOutlined),
            //     auth: true
            // },
        },
        {
            path: 'dongtai',
            name:'dongtai',
            element: React.createElement(DongTai),
            // meta: {
            //     menu: true,
            //     title: '异常考勤查询',
            //     icon: React.createElement(WarningOutlined),
            //     auth: true
            // },
        },
        {
            path: 'depFields',
            name: 'depFields',
            element: React.createElement(DepFields),
            // meta: {
            //     menu: true,
            //     title: '依赖字段',
            //     icon: React.createElement(FileAddOutlined),
            //     auth: true
            // },
        },
        
    // ]
//  },

// {
//     path: '/403',
//     element: React.createElement(NotAuth)
//   },
//   {
//     path: '/404',
//     element: React.createElement(NotFound)
//   },
//   {
//     path: '/500',
//     element: React.createElement(NotServer)
//   },
  {
    path: '*',
    element: React.createElement(Navigate, {to: '/404'})
  }
]

const router = createBrowserRouter(routes);

export default router;