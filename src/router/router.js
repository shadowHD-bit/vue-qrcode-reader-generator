import {createRouter, createWebHistory} from 'vue-router'

import MainPage from '@/pages/mainPage'
import QRGenerator from '@/pages/generatorPage'
import QRReader from '@/pages/readerPage'

const routes = [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/generate',
            name: 'generator',
            component: QRGenerator
        },
        {
            path: '/reading',
            name: 'reader',
            component: QRReader
        },
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router