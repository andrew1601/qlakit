import Home from './components/Home.vue'
import Analysis from './components/analysis/Analysis.vue'
import Paper from './components/analysis/Paper.vue'
import Overview from './components/analysis/Overview.vue'

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'analysis',
        path: '/analysis',
        component: Analysis,
        children: [
            {
                name: 'paper',
                path: 'paper/:id',
                component: Paper
            },
            {
                name: 'overview',
                path: '',
                component: Overview
            }
        ]
    }
];