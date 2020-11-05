import React, { lazy } from 'react';
const router = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: lazy(() => import('../views/Home/Home'))
    },
    {
        path: '/nav1',
        name: '导航一',
        routes: [
            {
                path: '/nav1/option1',
                name: '选项一',
                component: () => <h2>选项一</h2>
            },
            {
                path: '/nav1/option2',
                name: '选项二',
                component: () => <h2>选项二</h2>
            },
            {
                path: '/nav1/option3',
                name: '选项三',
                component: () => <h2>选项三</h2>
            }
        ]
    },
    {
        path: '/role',
        name: '角色',
        component: lazy(() => import('../views/Role/Role'))
    }
];
export default router;