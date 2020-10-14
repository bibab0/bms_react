import React, { lazy } from 'react';
const router = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: lazy(() => <h2>Home</h2>)
    },
    {
        path: '/nav1',
        name: '导航一',
        routes: [
            {
                path: 'option1',
                name: '选项一',
                component: lazy(() => <h2>选项一</h2>)
            },
            {
                path: 'option2',
                name: '选项二',
                component: lazy(() => <h2>选项二</h2>)
            },
            {
                path: 'option3',
                name: '选项三',
                component: lazy(() => <h2>选项三</h2>)
            }
        ]
    },
    {
        path: '/role',
        name: '角色',
        component: lazy(() => <h2>Shoelaces</h2>)
    }
];
export default router;