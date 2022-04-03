import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import NotFoundPage from '@/pages/NotFound';
import Item from '@/pages/ItemAlias';
import items from '@/seeders/items.js';

const routerHistory = createWebHashHistory();

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/:itemAlias',
            name: 'itemAlias',
            component: Item,
            beforeEnter(to) {
                if (!(items.find((item) => item.alias === to.params.itemAlias))) {
                    return {name: 'NotFound'};
                }
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundPage
        }
    ]
});

export default routers;
